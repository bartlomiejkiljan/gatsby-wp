import React from "react";
import styled from "styled-components";

export const QuoteWrapper = styled.div`
  padding: 100px 0;
  background-color: ${({theme}) => theme.gray};
  text-align: center;
`;

export const QuoteContent = styled.blockquote`
  margin: 0;
  padding: 10px 20px;
  font-size: 32px;
  color: ${({theme}) => theme.primary};
`;

export const QuoteAuthor = styled.p`
  margin: 0;
  font-size: 16px;
  color: darkgrey;
  font-weight: 400;
`;

export const QuoteCompany = styled.p`
  margin: 0;
  font-size: 16px;
  color: darkgrey;
  font-weight: 400;
`;

export const QuoteImage = styled.img`
  width: 60px;
  border-radius: 50%;
  margin: 15px auto;
`;