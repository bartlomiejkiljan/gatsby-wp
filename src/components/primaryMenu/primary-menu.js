import React from "react";
import {graphql, useStaticQuery} from "gatsby";

import { MenuWrapper, MenuList, MenuItem, MenuItemLink } from './primary-menu-styles';

const PrimaryMenu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    query MainMenuQuery {
      wpMenu(slug: {eq: "primary-menu"}) {
        slug
        name
        locations
        menuItems {
          nodes {
            url
            label
            id
          }
        }
      }
    }
  `);

  return !!wpMenu ? (
    <MenuWrapper>
      <MenuList>
        { wpMenu.menuItems.nodes.map(menuItem => (
          <MenuItem key={menuItem.id}><MenuItemLink to={ menuItem.url }>{ menuItem.label }</MenuItemLink></MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  ) : null;
};

export default PrimaryMenu;