const categoryTemplate = require.resolve(`../templates/category.js`);

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
            title
            id
            uri
            slug
            tags {
              nodes {
                slug
                uri
                name
                link
                id
              }
            }
            link
            excerpt
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            date(formatString: "d-M-y")
            categories {
              nodes {
                name
                link
              }
            }
          }
        }
      }
    }
  }
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