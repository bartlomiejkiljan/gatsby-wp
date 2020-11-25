import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentPosts from "../components/recent-posts/recent-posts";

const IndexPage = ({ data }) => (
  <Layout>
    Content: { data.allWpPage.nodes[0].blocks.length }
    <div dangerouslySetInnerHTML={{ __html: data.allWpPage.nodes[0].content }} />
    <SEO title="Home" />
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
