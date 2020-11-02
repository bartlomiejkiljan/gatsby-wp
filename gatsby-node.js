const createPosts = require(`./src/config/create-posts`);

exports.createPages = async ({ graphql, actions }) => {
  await createPosts({ graphql, actions });
};
