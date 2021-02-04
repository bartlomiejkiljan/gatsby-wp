import React from "react"
import {CardsItem, CardsItemWrapper, CardsWrapper, CardsItemContent, CardsItemTitle} from "./cards-styles";

const CardsSection = ({ items }) => (
  <CardsWrapper>
    { items.map(({attributes: {desc, title}}, i) => (
        <CardsItemWrapper key={`card-${i}`}>
          <CardsItem>
            <CardsItemTitle>{title}</CardsItemTitle>
            <CardsItemContent>{desc}</CardsItemContent>
          </CardsItem>
        </CardsItemWrapper>
      ))
    }
  </CardsWrapper>
);

export default CardsSection;