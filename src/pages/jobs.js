import React from "react";
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";

const Jobs = ({ data }) => (
  <Layout>
    <h1>All jobs ({ data.allWpJob.totalCount })</h1>
    {
      data.allWpJob.nodes.map(job => {
        const {
          id,
          title,
          jobDetails : { location, salary, endDate },
          excerpt,
          link
        } = job;

        return (
          <div key={ id }>
            <h3>{ title }</h3>
            <p>{ location }</p>
            <p>{ salary }</p>
            <p>{ endDate }</p>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            <Link to={ link }>Open details</Link>
          </div>
        )
      })
    }
  </Layout>
);

export default Jobs;

export const query = graphql`
  query GetJobs {
    allWpJob(sort: {fields: date, order: DESC}) {
      nodes {
        id
        categories {
          nodes {
            name
            slug
          }
        }
        excerpt
        link
        title
        date(formatString: "d-M-y")
        jobDetails {
          location
          salary
          endDate
        }
      }
      totalCount
    }
  }
`;