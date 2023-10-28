/**
 * app-user controller
 */
import { factories } from "@strapi/strapi";
import bcrypt from "bcrypt";

export default factories.createCoreController(
  "api::app-user.app-user",
  ({ strapi }) => {
    return {
      async login(ctx) {
        try {
          const { results } = await strapi.entityService.findPage(
            "api::app-user.app-user",
            {
              filters: {
                email: {
                  $eq: ctx.request.body.email,
                },
              },
            }
          );
          if (results.length === 0) {
            return null;
          }
          const appUser = results[0];
          const authenticated = await bcrypt.compare(
            ctx.request.body.password,
            appUser.password
          );
          if (!authenticated) {
            return null;
          }
          delete appUser.password;
          return appUser;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    };
  }
);
