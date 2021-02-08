import styled from "styled-components";
import {Link} from "gatsby";

export const Btn = styled(Link)`
  display: inline-block;
  padding: ${({size}) => 
    size === 'small' && '8px 14px' ||
    size === 'large' && '12px 18px' ||
    '10px 16px'
  };
  border: none;
  text-decoration: none;
  transition: background-color .35s ease;
  cursor: pointer;
  background-color: ${({secondary, theme}) => secondary ? theme.secondary : theme.primary};
  color: ${({theme}) => theme.white};

  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: ${({secondary, theme}) => secondary ? theme.primary : theme.secondary };
    color: ${({theme}) => theme.white};
  }
`;