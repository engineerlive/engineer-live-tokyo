import React from "react";

export default props => (
  <div>
    <h2>{props.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: props.bodyHTML }} />
  </div>
);
