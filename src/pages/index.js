import React from "react"

import Layout from "../components/layout"
import RecentPosts from "../components/recent-posts/recent-posts";

const IndexPage = () => (
  <Layout title="Home">
    <RecentPosts quantity={3} />
  </Layout>
);

export default IndexPage
