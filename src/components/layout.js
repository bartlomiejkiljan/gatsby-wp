import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./header/header"
import {Container, GlobalStyle, theme} from "../styles/theme";
import Footer from "./footer/footer";
import SEO from "./seo";

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme="green" />
        <SEO title={title}/>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer/>
      </ThemeProvider>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
