import React from "react";
import {FooterLink, FooterWrapper} from "./footer-styles";
import {Container} from "../../styles/theme";

const Footer = () => (
  <FooterWrapper>
    <Container>
      © {new Date().getFullYear()}, Built with{` `} <FooterLink to="https://www.gatsbyjs.com">Gatsby</FooterLink>
    </Container>
  </FooterWrapper>
);

export default Footer;