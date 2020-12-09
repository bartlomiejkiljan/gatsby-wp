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
  query Homepage {
    allWpPage(filter: {title: {eq: "Home"}}) {
      nodes {
        title
        ...Blocks
       }
    }
  }
`;
