const createPosts = require(`./src/config/create-posts`);
const createPages = require(`./src/config/create-pages`);

exports.createPages = async ({ graphql, actions }) => {
  await createPosts({ graphql, actions });
  await createPages({ graphql, actions });
};
