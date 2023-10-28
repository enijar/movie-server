/**
 * app-user router
 */

const router = {
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

export default router;
