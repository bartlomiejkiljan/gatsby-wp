import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';

export const SiteHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

export const SiteHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

export const Logo = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`;