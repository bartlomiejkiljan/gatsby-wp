const tagTemplate = require.resolve(`../templates/tag.js`);
const { SinglePostFragment } = require(`../data/post`);
const { createPagination } = require(`./create-pagination`);

const SLUG = 'tag';

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const tags = await graphql(`
    query Tags {
      allWpTag {
        nodes {
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

  tags.data.allWpTag.nodes.map(tag => {
    createPagination(graphql, createPage, tag, tagTemplate, `${SLUG}/${tag.slug}`);
  });
};