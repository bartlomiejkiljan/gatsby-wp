const postTemplate = require.resolve(`../templates/single-post.js`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          slug
          content
          categories {
            nodes {
              id
              link
              name
            }
          }
          tags {
            nodes {
              id
              name
              link
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          date(formatString: "d-M-y")
          author {
            node {
              name
            }
          }
        }
      }
    }
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