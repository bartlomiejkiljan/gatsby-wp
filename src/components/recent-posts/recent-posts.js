import React from "react";
import {useStaticQuery, graphql} from "gatsby"
import {Item, ItemBgPlaceholder, ItemButton, ItemContent, ItemDesc, ItemImg, ItemLink, ItemsWrapper, ItemTitle, RecentPostsSection, Title, TitleWrapper} from "./recent-posts-styles";
import {Button} from "../button/button";

const RecentPosts = ({ quantity }) => {

  const lastPosts = useStaticQuery(graphql`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          date(formatString: "d-M-y")   
        }
      }
    }
 `);

  const postsData = lastPosts.allWpPost.nodes;

  return (
    <RecentPostsSection>
      <TitleWrapper>
        <Title>Newest blog posts</Title>
        <Button url="/blog" label="Check our blog" />
      </TitleWrapper>
      { postsData.length &&
        <ItemsWrapper>
          { postsData.map(({featuredImage, slug, excerpt, title, id}, i) => {
          if (i < quantity) {
            return (
              <Item key={id}>
                <ItemBgPlaceholder>
                  {featuredImage && <ItemImg src={ featuredImage.node.sourceUrl } alt={ featuredImage.node.altText } /> }
                </ItemBgPlaceholder>
                <ItemContent>
                  <ItemLink to={`/blog/${slug}`}>
                    <ItemTitle>{title}</ItemTitle>
                  </ItemLink>
                  <ItemDesc dangerouslySetInnerHTML={{ __html: excerpt }} />
                  <ItemButton to={`/blog/${slug}`}>Read more</ItemButton>
                </ItemContent>
              </Item>
            )
          }
        })}
        </ItemsWrapper>
      }
    </RecentPostsSection>
  )
};

export default RecentPosts;