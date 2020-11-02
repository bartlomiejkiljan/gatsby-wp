import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";

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
    <div>
      <ul>
        { wpMenu.menuItems.nodes.map(menuItem => (
          <li key={menuItem.id}><Link to={ menuItem.url }>{ menuItem.label }</Link></li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default PrimaryMenu;