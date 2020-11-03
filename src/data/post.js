const SinglePostFragment = `
  fragment SinglePostFragment on WpPost {
    title
    slug
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
`;

module.exports.SinglePostFragment = SinglePostFragment;

