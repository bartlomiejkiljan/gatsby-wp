const pageTemplate = require.resolve(`../templates/page.js`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    query Pages {
      allWpPage {
        nodes {
          slug
          title
          content
        }
      }
    }
  `);

  pages.data.allWpPage.nodes.map(page => {
    createPage({
      path: page.slug,
      component: pageTemplate,
      context: {
        ...page
      }
    });
  });
};