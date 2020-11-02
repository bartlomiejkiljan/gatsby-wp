import React from "react";
import {Link} from "gatsby";

const PostCard = ({ data }) => {
  const {
    slug,
    title,
    author,
    categories,
    tags,
    date,
    featuredImage,
    excerpt,
    id
  } = data;

  console.log(data);

  return (
    <div key={ id }>
      { featuredImage && <img src={ featuredImage.node.sourceUrl } alt={ featuredImage.node.altText } /> }
      <h3><Link to={ `/blog/${slug}` }>{ title }</Link></h3>
      <p>by: { author.node.name } - { date }</p>
      { categories.nodes.map(cat => <Link key={ cat.id } to={ cat.link }>{ cat.name }</Link>) }
      { tags.nodes.map(tag => <Link key={ tag.id } to={ tag.link }>{ tag.name }</Link>) }
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
};

export default PostCard;