import styled from "styled-components";
import {Link} from "gatsby";

export const RecentPostsSection = styled.div`
  padding: 100px 0;
`;

export const TitleButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  color: ${({theme}) => theme.white};
  text-decoration: none;
  background-color: ${({theme}) => theme.secondary};
`;

export const TitleWrapper = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: flex-start
`;

export const Title = styled.h2`
  font-size: 36px;
  padding-bottom: 40px;
  color: ${({theme}) => theme.secondary};
`;

export const Item = styled.div`
  width: 33.33%;
  text-align: center;
  padding: 0 15px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
`;

export const ItemBgPlaceholder = styled.div`
  background-color: ${({theme}) => theme.primary};
  width: 100%;
  height: 200px;
`;

export const ItemLink = styled(Link)`
  font-size: 20px;
  color: ${({theme}) => theme.secondary};
  text-decoration: none;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  padding: 25px 0 20px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  margin: 0;
`;

export const ItemDesc = styled.p`
  font-size: 15px;
  line-height: 1.6;
`;

export const ItemButton = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${({theme}) => theme.primary};
`;

export const ItemContent = styled.div`
  background-color: ${({theme}) => theme.gray};
  padding: 0 20px 25px;
`;