import styled from "styled-components";
import {Link} from "gatsby";

const FORM_WIDTH = "480px";
const RESULTS_WIDTH = "300px";
const ARROW_SIZE = "12px";

export const SearchIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  color: ${({theme}) => theme.black};
  cursor: pointer;
`;

export const SearchPreview = styled.div`
  position: relative
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 150px;
  height: 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 2px 10px;
  background: transparent;
  border-bottom: 1px solid ${({theme}) => theme.gray};
`;

export const SearchResults = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  min-width: ${RESULTS_WIDTH};
  background: ${({theme}) => theme.white};
  border: 1px solid ${({theme}) => theme.gray};
  box-shadow: 0 0 15px rgba(0,0,0,.1);
  padding: 15px;
  
  &::before {
    content: "";
    right: 50px;
    top: calc(-${ARROW_SIZE}/2);
    position: absolute;
    width: ${ARROW_SIZE};
    height: ${ARROW_SIZE};
    background-color: ${({theme}) => theme.white};
    transform: rotateZ(45deg);
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${FORM_WIDTH};
  margin: 0;
`;

export const ResultsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ResultsListItem = styled.li`
  padding: 5px;
  margin: 0;
  
  &.active {
    background-color: ${({theme}) => theme.gray};
  }
`;

export const ResultsListLink = styled(Link)`
  color: ${({theme}) => theme.black};
  font-size: 16px;
  text-decoration: none;
  
  &:hover {
    color: ${({theme}) => theme.primary};
  }
`;

export const NoResult = styled.p`
  padding: 0;
  margin: 0;
`;