import styled, {createGlobalStyle} from "styled-components";

export const theme = {
  primary: "#118ab2",
  secondary: "#00296b",
  white: "#fff",
  gray: "#edf2fb",
  black: "#222831",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${theme.black};
    font-size: 16px;
    font-family: "Lato", serif;
    font-weight: normal;    
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 16px;
  border: none;
  text-decoration: none;
  transition: background-color .35s ease;
  cursor: pointer;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.white};

  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.white};
  }
`;