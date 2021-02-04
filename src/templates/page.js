import React from "react";
import Layout from "../components/layout";
import ContentManager from "../components/content-manager/content-manager";

const Page = ({ pageContext: {title, blocks} }) => (
  <Layout title={title}>
    <h1>{ title }</h1>
    <ContentManager blocks={blocks} />
  </Layout>
);

export default Page;
