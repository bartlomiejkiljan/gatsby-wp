import React from "react";
import {HeroItemCaption, HeroItemContent, HeroItemImage, HeroItemImageWrapper, HeroItemTitle, HeroWrapper, HeroItem} from "./hero-styles";
import {Button} from "../../styles/theme";

const HeroSection = ({ items }) => (
  <HeroWrapper>
    { items.map(({attributes: {title, bgColor, bgType, bgUrl, buttonText, buttonUrl, caption, imageAlign, imageAlt, imageUrl}, i}) => {
      return (
        <HeroItem className={imageAlign}
             style={{background: bgType === 'image' ? `url('${process.env.WORDPRESS_URL+bgUrl}') center/cover no-repeat` : bgColor}}
             key={`hero-${i}`}
        >
          <HeroItemContent className={!imageUrl ? 'center' : ''}>
            <HeroItemTitle>{title}</HeroItemTitle>
            <HeroItemCaption>{caption}</HeroItemCaption>
            { buttonUrl && <Button href={buttonUrl}>{buttonText}</Button>}
          </HeroItemContent>
          { imageUrl &&
            <HeroItemImageWrapper>
              <HeroItemImage src={process.env.WORDPRESS_URL+imageUrl} alt={imageAlt} />
            </HeroItemImageWrapper>
          }
        </HeroItem>
      )
      })
    }
  </HeroWrapper>
);

export default HeroSection;