import React from "react"
import { graphql } from 'gatsby'
import WPGBlocks from "react-gutenberg"

import Layout from "../components/layout"
import RecentPosts from "../components/recent-posts/recent-posts";
import Cta from "../components/cta";

const IndexPage = ({ data }) => (
  <Layout title="Home">
    Content: { data.allWpPage.nodes[0].blocks.length }
    {data.allWpPage.nodes[0].blocks.map(block => {
      if (block.name === 'custom/cta') {
        return <Cta attributes={block.attributes} />;
      }
    })}
    <WPGBlocks blocks={data.allWpPage.nodes[0].blocks} />
    <div dangerouslySetInnerHTML={{ __html: data.allWpPage.nodes[0].content }} />
    <RecentPosts quantity={3} />
  </Layout>
);

export default IndexPage

export const query = graphql`
query Blocks {
  allWpPage(filter: {title: {eq: "Home"}}) {
    nodes {
      content
      blocks {
        name
        originalContent
        saveContent
        ... on WpCustomCtaBlock {
          dynamicContent
          originalContent
          name
          attributes {
            buttonText
            buttonUrl
            className
            title
          }
          saveContent
          isDynamic
        }
      }
      title
    }
  }
}`;
