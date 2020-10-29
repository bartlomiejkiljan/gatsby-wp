/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then((result) => {
    result.data.allWpPost.nodes.forEach((post) => {
      console.log(post.slug);
      createPage({
        path: post.slug,
        component: path.resolve(`./src/pages/single-post.js`),
        context: {
          slug: post.slug,
        },
      })
    });
  })
};
