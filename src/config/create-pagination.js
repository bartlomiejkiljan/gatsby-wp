const createPagination = async (graphql, createPage, data, template, slug) => {

  const settings = await graphql(`
    query WpSettings {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `);

  let posts;

  data.name ? posts = data.posts.nodes : posts = data;

  const postsPerPage = settings.data.wp.readingSettings.postsPerPage;
  const pagesQty = Math.ceil(posts.length / postsPerPage);

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
      path: i===0 ? `/${slug}` : `/${slug}/page/${currentPage}`,
      component: template,
      context: {
        currentPage: currentPage,
        lastPage: pagesQty,
        slug: slug,
        posts: paginatedPosts,
        name: data.name ? data.name : ''
      }
    });
  }
};

module.exports.createPagination = createPagination;