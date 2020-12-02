import React from "react";
import {FooterLink, FooterWrapper} from "./footerStyles";
import {Container} from "../../styles/theme";

const Footer = () => (
  <FooterWrapper>
    <Container>
      © {new Date().getFullYear()}, Built with{` `} <FooterLink href="https://www.gatsbyjs.com">Gatsby</FooterLink>
    </Container>
  </FooterWrapper>
);

export default Footer;