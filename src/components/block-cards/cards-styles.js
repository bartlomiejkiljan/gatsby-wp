import React from "react";
import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;
  background-color: ${({theme})=>theme.gray};
`;

export const CardsItemWrapper = styled.div`
  width: 33.33%;
`;

export const CardsItem = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: ${({theme})=>theme.white};
  text-align: center;
`;

export const CardsItemTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
`;

export const CardsItemContent = styled.p`
  margin-bottom: 0;
`;