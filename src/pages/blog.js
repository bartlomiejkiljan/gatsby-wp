import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/post-card";

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog page" />
    { data.allWpPost.nodes.map(post => <PostCard data={post} />) }
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: {order: DESC, fields: date}) {
      nodes {
        id
        title
        slug
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