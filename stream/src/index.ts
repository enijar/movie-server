import * as express from "express";
import * as WebTorrent from "webtorrent";
import * as rangeParser from "range-parser";
import * as parseTorrent from "parse-torrent";
import * as pump from "pump";
import * as path from "node:path";
import { json } from "body-parser";
import * as cors from "cors";
import { z } from "zod";
import config from "./config";

const app = express();

app.use(json());
app.use(
  cors({
    origin(origin, next) {
      next(null, true);
    },
    credentials: true,
  }),
);

const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  year: z.number(),
  synopsis: z.string(),
  rating: z.number(),
  poster: z.string(),
  torrents: z.array(
    z.object({
      url: z.string().url(),
      quality: z.string().min(1),
      seeds: z.number(),
      hash: z.string(),
    }),
  ),
});

type MovieType = z.infer<typeof movieSchema>;

type CacheData = {
  movie: MovieType;
  file: WebTorrent.TorrentFile;
  updatedAt: number;
};

const CACHE_TIME = 20 * 60 * 1000; // 20 mins

const MAX_QUALITY = 1080;

const cache = new Map<number, CacheData>();

const client = new WebTorrent();

const trackers = [
  "udp://tracker.coppersurfer.tk:6969/announce",
  "udp://9.rarbg.to:2920/announce",
  "udp://tracker.opentrackr.org:1337",
  "udp://tracker.internetwarriors.net:1337/announce",
  "udp://tracker.leechers-paradise.org:6969/announce",
  "udp://tracker.pirateparty.gr:6969/announce",
  "udp://tracker.cyberia.is:6969/announce",
];

function findFile(movie: MovieType): Promise<WebTorrent.TorrentFile | null> {
  return new Promise(async (resolve) => {
    let hash: string | null = null;
    let highestQuality = 0;
    movie.torrents.forEach((torrent) => {
      const quality = parseInt(torrent.quality);
      if (quality > highestQuality && quality <= MAX_QUALITY) {
        hash = torrent.hash;
        highestQuality = quality;
      }
    });

    if (hash === null) {
      return resolve(null);
    }

    const parsedLink = parseTorrent(hash);
    const magnetUri = parseTorrent.toMagnetURI({
      ...parsedLink,
      announce: [...(parsedLink.announce ?? []), ...trackers],
    });

    const options: WebTorrent.TorrentOptions = {
      path: path.resolve(__dirname, "..", "storage"),
    };

    function getFile(torrent: WebTorrent.Torrent): WebTorrent.TorrentFile | null {
      const file = torrent.files.find((file) => {
        return file.name.endsWith(".mp4");
      });

      return (file as WebTorrent.TorrentFile) ?? null;
    }

    const torrent = client.get(magnetUri);

    if (torrent) {
      return resolve(getFile(torrent));
    }

    client.add(magnetUri, options, (torrent) => {
      const file = getFile(torrent);
      resolve(file);
    });
  });
}

app.get("/watch/:id", async (req, res) => {
  try {
    const apiResponse = await fetch(`${config.cmsUrl}/api/movie/${req.params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.cmsApiToken ?? ""}`,
      },
    });

    if (apiResponse.status === 404) {
      return res.status(404).end();
    }

    const movie = movieSchema.parse(await apiResponse.json());

    let cachedData = cache.get(movie.id) ?? null;

    const now = Date.now();

    // Update cache
    if (cachedData !== null && now - cachedData.updatedAt >= CACHE_TIME) {
      const file = await findFile(movie);
      if (file === null) {
        return res.status(404).end();
      }
      cachedData.movie = movie;
      cachedData.file = file;
      cachedData.updatedAt = now;
      cache.set(movie.id, cachedData);
    }

    // Create cache
    if (cachedData === null) {
      const file = await findFile(movie);
      if (file === null) {
        return res.status(404).end();
      }

      cache.set(movie.id, { movie, file, updatedAt: Date.now() });
      cachedData = cache.get(movie.id) ?? null;
    }

    if (cachedData === null) {
      return res.status(404).end();
    }

    const headerRange = req.headers.range;
    const fileSize = cachedData.file.length;
    const parsedRange = headerRange ? rangeParser(fileSize, headerRange) : null;
    const range = Array.isArray(parsedRange) ? parsedRange[0] : null;

    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Content-Length", fileSize);
    res.statusCode = 200;

    if (range !== null) {
      const bytes = `bytes ${range.start}-${range.end}/${fileSize}`;
      res.statusCode = 206;
      res.setHeader("Content-Range", bytes);
    }

    if (req.method === "HEAD") {
      return res.end();
    }

    pump(cachedData.file.createReadStream(range ?? undefined), res, () => {
      if (cachedData === null) {
        return res.status(404).end();
      }
      cachedData.file.deselect();
    });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

app.listen(config.port, () => {
  console.log(`Server running: http://localhost:${config.port}`);
});
