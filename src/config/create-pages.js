const pageTemplate = require.resolve(`../templates/page.js`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    query Pages {
      allWpPage {
        nodes {
          slug
          title
          blocks {
            name
            ... on WpCustomCtaBlock {
              attributes {
                buttonText
                buttonUrl
                className
                title
              }
            }
            ... on WpCustomQuoteBlock {
              attributes {
                author
                className
                company
                logoAlt
                logoUrl
                text
              }
            }
            ... on WpCoreParagraphBlock {
              attributes {
                ... on WpCoreParagraphBlockAttributes {
                  content
                }
              }
            }
            ... on WpCustomHeroSectionBlock {
              saveContent
              innerBlocks {
                name
                ... on WpCustomHeroItemBlock {
                  name
                  attributes {
                    title
                    bgColor
                    bgType
                    bgUrl
                    buttonText
                    buttonUrl
                    caption
                    imageAlign
                    imageAlt
                    imageUrl
                  }
                }
              }
            }
            ... on WpCustomCardSectionBlock {
              name
              innerBlocks {
                name
                ... on WpCustomCardBlock {
                  attributes {
                    desc
                    title
                  }
                }
              }
            }
            ... on WpCoreColumnsBlock {
              name
              saveContent
            }
          }
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