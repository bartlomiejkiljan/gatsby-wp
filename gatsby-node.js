const createPosts = require(`./src/config/create-posts`);
const createPages = require(`./src/config/create-pages`);
const createCategories = require(`./src/config/create-categories`);

exports.createPages = async ({ graphql, actions }) => {
  await createPosts({ graphql, actions });
  await createPages({ graphql, actions });
  await createCategories({ graphql, actions });
};
