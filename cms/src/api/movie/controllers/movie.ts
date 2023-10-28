/**
 * app-user controller
 */
import * as path from "node:path";
import * as fs from "node:fs/promises";
import { factories } from "@strapi/strapi";
import { Strapi } from "@strapi/types";
import { z } from "zod";
import sharp from "sharp";

const LIMIT_PER_PAGE = 50;
const DELAY_BETWEEN_PAGES = 0;

const schema = z.object({
  data: z.object({
    movies: z.array(
      z.object({
        id: z.number(),
        title: z.string().min(1),
        summary: z.string().optional(),
        rating: z.number(),
        year: z.number(),
        large_cover_image: z.string().url(),
        torrents: z.array(
          z.object({
            url: z.string().url(),
            quality: z.string().min(1),
            seeds: z.number(),
          })
        ),
      })
    ),
  }),
});

const hostname = "yts.proxyninja.net";

async function downloadPoster(imageUrl: string, ytsId: string) {
  const uploadsDir = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "public",
    "uploads"
  );
  try {
    const url = new URL(imageUrl);
    url.hostname = hostname;
    const res = await fetch(url.toString());
    const buffer = Buffer.from(await res.arrayBuffer());
    let width = 0;
    let height = 0;
    let size = 0;
    let format = "jpg";
    try {
      const metadata = await sharp(buffer).metadata();
      width = metadata.width;
      height = metadata.height;
      size = metadata.size;
      format = metadata.format;
    } catch {
      // Ignore error
    }
    const valid = width > 0 && height > 0 && size > 0;
    let existsInDatabase = false;
    const files = await strapi.entityService.findMany("plugin::upload.file", {
      filters: {
        url: {
          $in: [`/uploads/${ytsId}.jpg`, imageUrl],
        },
      },
    });
    if (files.length > 0) {
      existsInDatabase = true;
    }
    if (valid) {
      await fs.writeFile(path.join(uploadsDir, `${ytsId}.jpg`), buffer);
    }
    if (!existsInDatabase) {
      return await strapi.entityService.create("plugin::upload.file", {
        data: {
          url: valid ? `/uploads/${ytsId}.jpg` : imageUrl,
          name: `${ytsId}.jpg`,
          hash: "",
          mime: `image/${format}`,
          size,
          provider: "local",
          folderPath: valid ? "/" : "",
        },
      });
    } else {
      return files[0];
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function updateMovies(strapi: Strapi, page = 1) {
  try {
    const url = new URL("https://yts.mx/api/v2/list_movies.json");
    url.hostname = hostname;
    url.searchParams.set("sort_by", "download_count");
    url.searchParams.set("quality", "1080p");
    url.searchParams.set("limit", LIMIT_PER_PAGE.toString());
    url.searchParams.set("language", "en");
    url.searchParams.set("page", `${page}`);
    const res = await fetch(url.toString());
    const { data } = schema.parse(await res.json());
    type Movie = any;
    const movies: Movie[] = [];
    for (const movie of data.movies) {
      const ytsId = String(movie.id);
      const file = await downloadPoster(movie.large_cover_image, ytsId);
      movies.push({
        ytsId,
        uuid: ytsId,
        title: movie.title,
        synopsis: movie.summary,
        rating: movie.rating,
        year: `${movie.year}-01-01`,
        poster: file.id,
        torrents: movie.torrents.map((torrent) => {
          const url = new URL(torrent.url);
          url.hostname = hostname;
          return {
            ...torrent,
            url: url.toString(),
          };
        }),
      });
    }

    await Promise.allSettled(
      movies.map(async (movie) => {
        try {
          const movies = await strapi.entityService.findMany(
            "api::movie.movie",
            {
              filters: {
                ytsId: {
                  $eq: movie.ytsId,
                },
              },
            }
          );
          if (movies.length === 0) {
            await strapi.entityService.create("api::movie.movie", {
              data: movie,
              populate: "*",
            });
          } else {
            await strapi.entityService.update(
              "api::movie.movie",
              movies[0].id,
              { data: { ...movies[0], ...movie } }
            );
          }
        } catch {
          // Ignore error
        }
      })
    );
    await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_PAGES));
    return updateMovies(strapi, page + 1);
  } catch (err) {
    console.error(err);
  }
}

export default factories.createCoreController(
  "api::movie.movie",
  ({ strapi }) => {
    return {
      async all(ctx) {
        let page = parseInt(ctx.query.page);
        let pageSize = parseInt(ctx.query.pageSize);
        if (isNaN(page)) {
          page = 1;
        }
        if (isNaN(pageSize)) {
          pageSize = 10;
        }
        return await strapi.entityService.findPage("api::movie.movie", {
          page,
          pageSize,
        });
      },
      async update() {
        await updateMovies(strapi);
      },
    };
  }
);
