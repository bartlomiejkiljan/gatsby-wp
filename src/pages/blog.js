import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog page" />
    { data.allWpPost.nodes.map((post) => (
      <div key={post.id}>
        <h3><Link to={ `/${post.slug}/` }>{ post.title }</Link></h3>
        <p>by: { post.author.node.firstName } - { post.date }</p>
        { post.categories.nodes.map(cat => <Link key={ cat.id } to={ cat.link }>{ cat.name }</Link>) }
        { post.tags.nodes.map(tag => <Link key={ tag.id } to={ tag.link }>{ tag.name }</Link>) }
      </div>
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