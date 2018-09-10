import React from "react";
import { Link } from "react-router-dom";

export default ({ title, issueNumber, bodyHTML }) => (
  <div>
    <h2>
      {issueNumber ? <Link to={`/lineup/${issueNumber}`}>{title}</Link> : title}
    </h2>
    <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
  </div>
);
