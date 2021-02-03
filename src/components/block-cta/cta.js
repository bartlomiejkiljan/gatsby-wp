import React from "react"
import {CtaTitle,CtaWrapper} from "./cta-styles";
import {Button} from "../../styles/theme";

const Cta = ({ attributes: {title, buttonUrl, buttonText} }) => {

  return (
    <CtaWrapper>
      <CtaTitle>{title}</CtaTitle>
      <Button href={buttonUrl}>{buttonText}</Button>
    </CtaWrapper>
  );
};

export default Cta;