import React from "react";
import {graphql, useStaticQuery} from "gatsby";

import { MenuWrapper, MenuList, MenuItem, MenuItemLink, SubMenu } from './primary-menu-styles';

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
            parentId
            childItems {
              nodes {
                id
                url
                label
              }
            }
          }
        }
      }
    }
  `);

  return !!wpMenu ? (
    <MenuWrapper>
      <MenuList>
        { wpMenu.menuItems.nodes.map(menuItem => {
          if (!menuItem.parentId) {
            const hasChildren = menuItem.childItems.nodes.length;

            return (
              <MenuItem key={menuItem.id} className={ hasChildren ? 'submenu' : '' }>
                <MenuItemLink to={ menuItem.url }>{ menuItem.label }</MenuItemLink>
                { hasChildren > 0 &&
                  <SubMenu>
                    { menuItem.childItems.nodes.map(item => (
                      <MenuItem key={item.id}>
                        <MenuItemLink to={item.url}>{item.label}</MenuItemLink>
                      </MenuItem>
                    ))}
                  </SubMenu>
                }
              </MenuItem>
            )
          }
          return null;
        })}
      </MenuList>
    </MenuWrapper>
  ) : null;
};

export default PrimaryMenu;