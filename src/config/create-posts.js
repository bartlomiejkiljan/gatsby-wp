const { SinglePostFragment } = require(`../data/post`);
const postTemplate = require.resolve(`../templates/single-post.js`);
const blogPage = require.resolve(`../templates/blog.js`);
const { createPagination } = require(`./create-pagination`);

const SLUG = 'blog';

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postData = await graphql(`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
         ...SinglePostFragment
        }
      }
    }
    ${SinglePostFragment}
  `);

  const posts = postData.data.allWpPost.nodes;

  await createPagination(graphql, createPage, posts, blogPage, SLUG);

  posts.map(post => {
    createPage({
      path: `/${SLUG}/${post.slug}/`,
      component: postTemplate,
      context: {
        ...post
      }
    });
  });
};