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
      path: "/movies/:id",
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
  ],
};
