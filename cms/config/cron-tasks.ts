export default {
  updateMovies: {
    async task({ strapi }) {
      console.log("?");
    },
    options: {
      rule: "*/1 * * *",
    },
  },
};
