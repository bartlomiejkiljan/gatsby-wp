import React from "react";

const Quote = ({ attributes: { author, className, company, logoAlt, logoUrl, text} }) => (
  <div className={className}>
    <blockquote className="quote__text">{text}</blockquote>
    <p className="quote__author">{author}</p>
    <p className="quote__company">{company}</p>
    <img className="quote__logo" src={process.env.WORDPRESS_URL+logoUrl} alt={logoAlt} />
  </div>
);

export default Quote;