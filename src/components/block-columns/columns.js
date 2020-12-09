import React from "react"

const Columns = ({content}) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

export default Columns;