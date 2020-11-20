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
      <h1>{ currentPage > 1 ? `Blog page ${currentPage}` : 'Blog' }</h1>
      { posts.map(post => <PostCard data={post} key={post.id} />) }
      <Pagination currentPage={currentPage} lastPage={lastPage} slug={slug} />
    </Layout>
  )
};

export default Blog;