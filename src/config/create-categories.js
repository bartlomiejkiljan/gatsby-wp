const categoryTemplate = require.resolve(`../templates/category.js`);
const { SinglePostFragment } = require(`../data/post`);
const { createPagination } = require(`./create-pagination`);

const SLUG = 'category';

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const categories = await graphql(`
    query Categories {
     allWpCategory {
      nodes {
        count
        slug
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

  categories.data.allWpCategory.nodes.map(category => {
    createPagination(graphql, createPage, category, categoryTemplate, `${SLUG}/${category.slug}`);
  });
};