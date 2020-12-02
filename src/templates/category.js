import React from "react";
import Layout from "../components/layout";
import PostCard from "../components/post-card";
import Pagination from "../components/pagination";

const Category = ({pageContext}) => {

  const {
    name,
    posts,
    currentPage,
    lastPage,
    slug,
  } = pageContext;

  return (
    <Layout title={currentPage > 1 ? `Category ${name} - Page ${currentPage}` : `Category ${name}`}>
      <h1>Category: { name }</h1>
      { posts && posts.map(post => <PostCard data={ post } key={ post.id } />) }
      <Pagination currentPage={currentPage} lastPage={lastPage} slug={slug} />
    </Layout>
  )
};

export default Category;
