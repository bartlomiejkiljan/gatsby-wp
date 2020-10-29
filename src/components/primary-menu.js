import React from "react";
import { graphql, StaticQuery} from "gatsby";

const PrimaryMenu = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <div>
        <ul>
          { data.wpMenu ? data.wpMenu.menuItems.nodes.map(menuItem => (
            <li>{ menuItem.label }</li>
          )) : null }
        </ul>
      </div>
    )}
  />
);

export default PrimaryMenu;