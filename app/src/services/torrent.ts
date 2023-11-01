import * as path from "path";
import WebTorrent, { type TorrentFile } from "webtorrent";
import ParseTorrent, { toMagnetURI } from "parse-torrent";
import { type MovieType } from "@/types";

type CacheData = {
  movie: MovieType;
  file: TorrentFile;
  updatedAt: number;
};

const cache = new Map<MovieType["id"], CacheData>();

const client = new WebTorrent();

export default class Torrent {
  static cacheTime = 20 * 60 * 1000; // 20 mins

  static maxQuality = 1080;

  static trackers = [
    "udp://tracker.coppersurfer.tk:6969/announce",
    "udp://9.rarbg.to:2920/announce",
    "udp://tracker.opentrackr.org:1337",
    "udp://tracker.internetwarriors.net:1337/announce",
    "udp://tracker.leechers-paradise.org:6969/announce",
    "udp://tracker.pirateparty.gr:6969/announce",
    "udp://tracker.cyberia.is:6969/announce",
  ];

  static storagePath = path.resolve(__dirname, "..", "..", "..", "..", "..", "..", "storage");

  static async download(movie: MovieType) {
    const now = Date.now();
    let cachedData = cache.get(movie.id) ?? null;

    // Update cache
    const file = await this.findFile(movie);
    if (cachedData !== null && now - cachedData.updatedAt >= this.cacheTime && file !== null) {
      cachedData.movie = movie;
      cachedData.file = file;
      cachedData.updatedAt = now;
      cache.set(movie.id, cachedData);
    }

    // Create cache
    if (cachedData === null) {
      const file = await this.findFile(movie);
      if (file === null) {
        return null;
      }

      cache.set(movie.id, { movie, file, updatedAt: Date.now() });
      cachedData = cache.get(movie.id) ?? null;
    }

    return cachedData;
  }

  static findFile(movie: MovieType): Promise<WebTorrent.TorrentFile | null> {
    return new Promise(async (resolve) => {
      let hash: string | null = null;
      let highestQuality = 0;
      movie.torrents.forEach((torrent) => {
        const quality = parseInt(torrent.quality);
        if (quality > highestQuality && quality <= this.maxQuality) {
          hash = torrent.hash;
          highestQuality = quality;
        }
      });

      if (hash === null) {
        return resolve(null);
      }

      const parsedLink = ParseTorrent(hash);
      const magnetUri = toMagnetURI({
        ...parsedLink,
        announce: [...(parsedLink.announce ?? []), ...this.trackers],
      });

      const options: WebTorrent.TorrentOptions = {
        path: this.storagePath,
      };

      function getFile(torrent: WebTorrent.Torrent): WebTorrent.TorrentFile | null {
        const file = (torrent.files ?? []).find((file) => {
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
}
