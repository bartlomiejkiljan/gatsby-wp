import styled from "styled-components";
import React from "react";
import {Link} from "gatsby";

export const MenuWrapper = styled.div`
`;

export const MenuList = styled.div`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 10px 5px;
  margin-bottom: 0;
`;

export const MenuItemLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  
  &:hover {
    color: black;
  }
`;