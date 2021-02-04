import React from "react";
import styled from "styled-components";

export const HeroItemContent = styled.div`
  width: 50%;
  padding: 0 40px;
  color: $color-white;
  order: 1;

  &.center {
    width: 100%;
    text-align: center;
  }
}
`;

export const HeroItemImageWrapper = styled.div`
  width: 50%;
  padding: 0 40px;
  order: 2;
`;

export const HeroItem = styled.div`
  background-color: ${({theme})=>theme.gray};
  background-size: cover;
  height: 600px;
  display: flex;
  align-items: center;
  
  &.left {
    ${HeroItemContent} {
        order: 2;
      }
  
    ${HeroItemImageWrapper} {
        order: 1;
      }
    }
  }
`;

export const HeroWrapper = styled.div`
`;

export const HeroItemTitle = styled.h1`
  margin: 0;
  padding-bottom: 25px;
  font-size: 28px;
  color: ${({theme})=>theme.white};
`;

export const HeroItemCaption = styled.p`
  margin: 0;
  padding-bottom: 25px;
  font-size: 18px;
  color: ${({theme})=>theme.white};
`;

export const HeroItemImage = styled.img`
  max-width: 500px;
  width: 100%;
`;
