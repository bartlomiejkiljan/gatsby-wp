import React from "react";
import {QuoteAuthor, QuoteCompany, QuoteContent, QuoteImage, QuoteWrapper} from "./quote-styles";

const Quote = ({ attributes: { author, company, logoAlt, logoUrl, text} }) => (
  <QuoteWrapper>
    <QuoteContent>{text}</QuoteContent>
    <QuoteCompany>{author}</QuoteCompany>
    <QuoteAuthor>{company}</QuoteAuthor>
    <QuoteImage src={process.env.WORDPRESS_URL+logoUrl} alt={logoAlt} />
  </QuoteWrapper>
);

export default Quote;