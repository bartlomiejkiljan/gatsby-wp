import React from "react";
import Layout from "../components/layout";
import PostCard from "../components/post-card";

const Category = props => {

  const {
    pageContext: {
      name,
      posts
    }
  } = props;

  return (
    <Layout>
      <h1>Category: { name }</h1>
      { posts.nodes && posts.nodes.map(post => <PostCard data={ post }/>) }
    </Layout>
  )
};

export default Category;
