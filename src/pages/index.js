import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import RecentPosts from "../components/recent-posts/recent-posts";
import Cta from "../components/block-cta/cta";
import Paragraph from "../components/block-paragraph/paragraph";
import Quote from "../components/block-quote/quote";

const IndexPage = ({ data }) => {
  console.log(data.allWpPage.nodes[0].blocks);
  return (
    <Layout title="Home">
    {data.allWpPage.nodes[0].blocks.map(block => {
      if (block.name === 'custom/cta') {
        return <Cta attributes={block.attributes} />;
      } else if (block.name === 'core/paragraph') {
        return <Paragraph attributes={block.attributes} />
      } else if (block.name === 'custom/quote') {
        return <Quote attributes={block.attributes} />
      }
    })}
    <RecentPosts quantity={3} />
  </Layout>
)};

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
      }
    }
  }
}`;
