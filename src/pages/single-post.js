import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function SinglePost({ data }) {
  const post = data.allWpPost.nodes[0];

  return (
    <Layout>
      <h1>{ post.title }</h1>
      <div>{ post.content }</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;