import PropTypes from "prop-types"
import React from "react"
import PrimaryMenu from "../primary-menu/primary-menu";
import Search from "../search/search";

import { SiteHeader, SiteHeaderWrapper, Logo } from './header-styles';

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <SiteHeaderWrapper>
      <Logo to="/">{siteTitle}</Logo>
      <PrimaryMenu/>
      <Search/>
    </SiteHeaderWrapper>
  </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
