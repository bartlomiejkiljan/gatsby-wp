import styled from "styled-components";
import {Link} from "gatsby";


export const FooterWrapper = styled.footer`
  background: ${({theme}) => theme.secondary };
  padding: 20px;
  color: ${({theme}) => theme.white };
`;

export const FooterLink = styled(Link)`
  color: ${({theme}) => theme.white };
  
  &:hover {
    color: ${({theme}) => theme.primary };
  }
`;