import React from "react";

import Layout from "../components/layout";

const Job = ({ pageContext }) => {
  const {
    content,
    title,
    jobDetails: {
      location,
      salary,
      endDate,
    }
  } = pageContext;

  return (
    <Layout title={title}>
      <h1>{ title }</h1>
      <div>{ location } - { salary } - { endDate }</div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <button>Apply Now</button>
    </Layout>
  )
};

export default Job;