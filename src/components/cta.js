import React from "react"

const Cta = ({ attributes: {title, buttonUrl, buttonText} }) => {

  return (
    <div className="wp-block-custom-cta">
      <h3 className="cta__title">{title}</h3>
      <a className="button button--primary" href={buttonUrl}>{buttonText}</a>
    </div>
  );
};

export default Cta;