const jobTemplate = require.resolve(`../templates/job.js`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const jobs = await graphql(`
    query GetJobUrls {
      allWpJob(sort: {fields: date, order: DESC}) {
        nodes {
          id
          content
          link
          title
          date(formatString: "d-M-y")
          jobDetails {
            location
            salary
            endDate
          }
        }
      }
    }
  `);

  jobs.data.allWpJob.nodes.map(jobs => {
    createPage({
      path: jobs.link,
      component: jobTemplate,
      context: {
        ...jobs
      }
    });
  });
};