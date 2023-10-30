/**
 * movie router
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/movies",
      handler: "movie.all",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/movie/:id",
      handler: "movie.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/movie/update",
      handler: "movie.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/movies/search",
      handler: "movie.search",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
