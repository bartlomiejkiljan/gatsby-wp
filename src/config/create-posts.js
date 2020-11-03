const { SinglePostFragment } = require(`../data/post`);
const postTemplate = require.resolve(`../templates/single-post.js`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query {
      allWpPost(sort: { fields: [date] }) {
        nodes {
         ...SinglePostFragment
        }
      }
    }
    ${SinglePostFragment}
  `);

  posts.data.allWpPost.nodes.map(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: postTemplate,
      context: {
        ...post
      }
    });
  });
};