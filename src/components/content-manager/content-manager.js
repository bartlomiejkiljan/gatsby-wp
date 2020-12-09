import React from "react";
import Cta from "../block-cta/cta";
import Paragraph from "../block-paragraph/paragraph";
import Quote from "../block-quote/quote";
import HeroSection from "../block-hero/hero-section";
import CardsSection from "../block-cards/cards-section";
import Columns from "../block-columns/columns";

const ContentManager = ({blocks}) => {
  console.log(blocks);
  return (
    <div>
      { blocks.map((block, i) => {
        switch (block.name) {
          case 'custom/cta': return <Cta attributes={block.attributes} key={`block-${i}`} />;
          case 'core/paragraph': return <Paragraph attributes={block.attributes} key={`block-${i}`} />;
          case 'custom/quote': return <Quote attributes={block.attributes} key={`block-${i}`} />;
          case 'custom/hero-section': return <HeroSection items={block.innerBlocks} key={`block-${i}`} />;
          case 'custom/card-section': return <CardsSection items={block.innerBlocks} key={`block-${i}`} />;
          case 'core/columns': return <Columns content={block.saveContent} key={`block-${i}`} />;
        }
      })}
    </div>
  )
};

export default ContentManager;