exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
  createTypes(typeDefs);
};

const createPosts = require(`./src/config/create-posts`);
const createPages = require(`./src/config/create-pages`);
const createCategories = require(`./src/config/create-categories`);
const createTags = require(`./src/config/create-tags`);
const createJobs = require(`./src/config/create-jobs`);

exports.createPages = async ({ graphql, actions }) => {
  await createPages({ graphql, actions });
  await createPosts({ graphql, actions });
  await createCategories({ graphql, actions });
  await createJobs({ graphql, actions });
  await createTags({ graphql, actions });
};
