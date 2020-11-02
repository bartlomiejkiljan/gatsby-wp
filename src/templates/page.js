import React from "react";
import Layout from "../components/layout";

const Page = props => {

  const {
    pageContext: {
      title,
      content
    }
  } = props;

  return (
    <Layout>
      <h1>{ title }</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
};

export default Page;
