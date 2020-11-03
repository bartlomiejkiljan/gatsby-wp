import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";

const Jobs = ({ data }) => {

  return (
    <Layout>
      <h1>All jobs ({ data.allWpJob.totalCount })</h1>
      {
        data.allWpJob.nodes.map(job => (
          <div key={ job.id }>
            <h3>{ job.title }</h3>
            <div dangerouslySetInnerHTML={{ __html: job.excerpt }}></div>
            <button>Open details</button>
          </div>
        ))
      }
    </Layout>
  )
};

export default Jobs;

export const query = graphql`
  query GetJobs {
    allWpJob {
      nodes {
        id
        categories {
          nodes {
            name
            slug
          }
        }
        excerpt
        slug
        title
        date(formatString: "d-M-y")
      }
      totalCount
    }
  }
`;