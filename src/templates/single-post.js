import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"

const SinglePost = props => {

  const {
    pageContext: {
      title,
      content,
      categories,
      tags,
      featuredImage,
      date,
      author
    }
  } = props;

  return (
    <Layout title={title}>
      { featuredImage &&
        <img src={ featuredImage.node.sourceUrl } alt={ featuredImage.node.altText } />
      }
      <h1>{ title }</h1>
      <p>Create: { date }</p>
      <p>By: { author.node.name }</p>
      { categories.nodes.map(cat => <Link key={ cat.id } to={ cat.link }>{ cat.name }</Link>) }
      { tags.nodes.map(tag => <Link key={ tag.id } to={ tag.link }>{ tag.name }</Link>) }
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
};

export default SinglePost;