import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog page" />
    { data.allWpPost.nodes.map((post) => (
      <ul>
        <li key={post.id}><Link to={ `/${post.slug}/` }>{ post.title }</Link> - by: { post.author.node.firstName } - { post.date } </li>
      </ul>
    ))
    }
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: {order: DESC, fields: date}) {
      nodes {
        id
        title
        slug
        author {
          node {
            firstName
            lastName
            nickname
          }
        }
        date(formatString: "y-M-d")
      }
    }
  }
`;

export default Blog;