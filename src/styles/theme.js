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