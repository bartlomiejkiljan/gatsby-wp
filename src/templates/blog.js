import React from "react";
import PostCard from "../components/post-card";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

const Blog = ({ pageContext }) => {

  const {
    currentPage,
    lastPage,
    slug,
    posts
  } = pageContext;

  return (
    <Layout>
      <h1>Blog page { currentPage }</h1>
      { posts.map(post => <PostCard data={post} />) }
      <Pagination currentPage={currentPage} lastPage={lastPage} slug={slug} />
    </Layout>
  )
};

export default Blog;