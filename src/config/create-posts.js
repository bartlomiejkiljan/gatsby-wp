const { SinglePostFragment } = require(`../data/post`);
const postTemplate = require.resolve(`../templates/single-post.js`);
const blogPage = require.resolve(`../templates/blog.js`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postData = await graphql(`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
         ...SinglePostFragment
        }
      }
    }
    ${SinglePostFragment}
  `);

  const settings = await graphql(`
    query WpSettings {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `);

  const postsPerPage = settings.data.wp.readingSettings.postsPerPage;
  const posts = postData.data.allWpPost.nodes;
  const pagesQty = Math.ceil(posts.length / postsPerPage);
  const blogSlug = 'blog';

  let postEndLimit = 0;

  for (let i=0; i<pagesQty; i++) {
    const currentPage = i + 1;

    let paginatedPosts = [];
    if (i===0) {
      paginatedPosts = posts.slice(i, postsPerPage);
      postEndLimit = postsPerPage;
    } else {
      paginatedPosts = posts.slice(postEndLimit, postEndLimit + postsPerPage);
      postEndLimit += postsPerPage;
    }

    createPage({
      path: i===0 ? `/${blogSlug}` : `/${blogSlug}/page/${currentPage}`,
      component: blogPage,
      context: {
        currentPage: currentPage,
        lastPage: pagesQty,
        slug: blogSlug,
        posts: paginatedPosts
      }
    });
  }

  posts.map(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: postTemplate,
      context: {
        ...post
      }
    });
  });
};