import React from "react";
import Layout from "../components/layout";
import PostCard from "../components/post-card";
import Pagination from "../components/pagination";

const Tag = ({pageContext}) => {

  const {
    name,
    posts,
    currentPage,
    lastPage,
    slug,
  } = pageContext;

  return (
    <Layout title={currentPage > 1 ? `Tag ${name} - Page ${currentPage}` : `Tag ${name}`}>
      <h1>Tag: { name }</h1>
      { posts && posts.map(post => <PostCard data={ post } key={ post.id } />) }
      <Pagination currentPage={currentPage} lastPage={lastPage} slug={slug} />
    </Layout>
  )
};

export default Tag;
