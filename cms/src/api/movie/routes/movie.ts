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
      path: "/movies/search",
      handler: "movie.search",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
