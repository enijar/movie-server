/**
 * app-user controller
 */
import { factories } from "@strapi/strapi";

const RESULTS_LIMIT = 50;

const hostname = "yts.proxyninja.net";

function fixPosterUrl(posterUrl: string) {
  if (!posterUrl.startsWith("http")) {
    return `${process.env.URL}${posterUrl}`;
  }
  const url = new URL(posterUrl);
  url.hostname = hostname;
  url.searchParams.set("v", "0.1");
  return url.toString();
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
          pageSize = RESULTS_LIMIT;
        }
        const res = await strapi.entityService.findPage("api::movie.movie", {
          page,
          pageSize,
          populate: "*",
          sort: [{ seeds: "desc" }, { year: "desc" }],
        });
        res.results = res.results.map((movie) => {
          return {
            ...movie,
            poster: fixPosterUrl(movie.poster.url),
          };
        });
        return res;
      },
      async findOne(ctx) {
        const res = await strapi.entityService.findOne(
          "api::movie.movie",
          ctx.params.id,
          {
            populate: "*",
          }
        );
        res.poster = fixPosterUrl(res.poster.url);
        return res;
      },
      async search(ctx) {
        let page = parseInt(ctx.query.page ?? "1");
        if (isNaN(page) || page < 1) {
          page = 1;
        }
        const filter = {
          title: {
            $contains: String(ctx.query.query ?? ""),
          },
        };
        const [movies, count] = await Promise.all([
          strapi.entityService.findMany("api::movie.movie", {
            filters: filter,
            start: RESULTS_LIMIT * (page - 1),
            limit: RESULTS_LIMIT,
            populate: "*",
            sort: [{ seeds: "desc" }, { year: "desc" }],
          }),
          strapi.entityService.count("api::movie.movie", { filters: filter }),
        ]);
        const results = movies.map((movie) => {
          // fixme: movie.poster type
          // @ts-ignore
          return { ...movie, poster: fixPosterUrl(movie.poster.url) };
        });
        return {
          results,
          pagination: {
            page,
            pageSize: RESULTS_LIMIT,
            pageCount: Math.ceil(count / RESULTS_LIMIT),
            total: count,
          },
        };
      },
    };
  }
);
