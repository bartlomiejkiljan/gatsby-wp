import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentPosts from "../components/recent-posts/recent-posts";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RecentPosts quantity={3} />
  </Layout>
);

export default IndexPage
