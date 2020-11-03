const categoryTemplate = require.resolve(`../templates/category.js`);
const { SinglePostFragment } = require(`../data/post`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const categories = await graphql(`
    query Categories {
     allWpCategory {
      nodes {
        count
        link
        name
        posts {
          nodes {
            ...SinglePostFragment
          }
        }
      }
    }
  }
  ${SinglePostFragment}
`);

  categories.data.allWpCategory.nodes.map(cat => {
    createPage({
      path: cat.link,
      component: categoryTemplate,
      context: {
        ...cat
      }
    });
  });
};