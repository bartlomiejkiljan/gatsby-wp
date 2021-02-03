import {graphql} from "gatsby";

export const Blocks = graphql`
  fragment Blocks on WpPage {
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
          ... on WpCustomCardItemBlock {
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
`;