import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import RecentPosts from "../components/recent-posts/recent-posts";
import ContentManager from "../components/content-manager/content-manager";

const IndexPage = ({ data }) => (
    <Layout title="Home">
    <ContentManager blocks={data.allWpPage.nodes[0].blocks} />
    <RecentPosts quantity={3} />
  </Layout>
);

export default IndexPage

export const query = graphql`
query Blocks {
  allWpPage(filter: {title: {eq: "Home"}}) {
    nodes {
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
      }
    }
  }
}`;
