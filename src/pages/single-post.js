import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"

export default function SinglePost({ data }) {
  const post = data.allWpPost.nodes[0];

  return (
    <Layout>
      { post.featuredImage &&
        <img src={ post.featuredImage.node.sourceUrl } alt={ post.featuredImage.node.altText } />
      }
      <h1>{ post.title }</h1>
      <p>Create: { post.date }</p>
      <p>By: { post.author.node.name }</p>
      { post.categories.nodes.map(cat => <Link key={ cat.id } to={ cat.link }>{ cat.name }</Link>) }
      { post.tags.nodes.map(tag => <Link key={ tag.id } to={ tag.link }>{ tag.name }</Link>) }
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
        categories {
          nodes {
            id
            link
            name
          }
        }
        tags {
          nodes {
            id
            name
            link
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        date(formatString: "d-M-y")
        author {
          node {
            name
          }
        }
      }
    }
  }
`;