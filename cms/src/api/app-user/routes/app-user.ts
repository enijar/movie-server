/**
 * app-user router
 */

export default {
  routes: [
    {
      method: "POST",
      path: "/app-user/login",
      handler: "app-user.login",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
