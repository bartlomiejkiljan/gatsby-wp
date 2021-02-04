import React from "react";
import styled from "styled-components";

export const CtaWrapper = styled.div`
  padding: 100px 0;
  background-color: ${({theme}) => theme.black };
  text-align: center;
`;

export const CtaTitle = styled.h3`
  margin: 0;
  padding: 10px 0;
  margin-bottom: 25px;
  color: ${({theme}) => theme.white };
`;