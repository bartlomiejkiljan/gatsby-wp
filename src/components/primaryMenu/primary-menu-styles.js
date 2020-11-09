import styled from "styled-components";
import React from "react";
import {Link} from "gatsby";

export const MenuWrapper = styled.div`
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 50%;
  left: -50%;
  width: 120px;
  display: none;
  background: rebeccapurple;
  text-align: center;
  list-style: none;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
`;

export const MenuList = styled.div`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 10px 5px;
  margin-bottom: 0;
  
  &:hover {
    ${SubMenu} {
        display: block;
    }
  }
  
  &.submenu {
    position: relative;
  }
`;

export const MenuItemLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  
  &:hover {
    color: black;
  }
`;