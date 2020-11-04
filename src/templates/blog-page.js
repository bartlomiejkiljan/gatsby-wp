import React from "react";
import PostCard from "../components/post-card";
import Layout from "../components/layout";

const BlogPage = ({ pageContext }) => {

  const {
    currentPage,
    posts
  } = pageContext;

  return (
    <Layout>
      <h1>Blog page { currentPage }</h1>
      { posts.map(post => <PostCard data={post} />) }
    </Layout>
  )
};

export default BlogPage;