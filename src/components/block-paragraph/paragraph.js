import React from "react"

const Paragraph = ({ attributes: {content} }) => {

  return (
    <p dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default Paragraph;