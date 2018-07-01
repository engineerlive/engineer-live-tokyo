import React from "react";
import { Link } from "react-router-dom";

import typography from "../utils/typography";

export default ({ title, date, authorName, issueNumber }) => (
  <div>
    <h2>
      {issueNumber ? <Link to={`/posts/${issueNumber}`}>{title}</Link> : title}
    </h2>
    <h4 style={{ color: typography.options.lightBodyColor }}>
      {new Date(date).toISOString().split("T")[0]} by {authorName}
    </h4>
  </div>
);
