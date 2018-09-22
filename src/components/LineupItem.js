import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LineupItemWrapper = styled.div`
  border-bottom: solid 1px #3a3a3a;
  margin: 2em 0;
  padding: 2em 1em;
`;

const LineupTitle = styled.h2`
  font-size: 2rem;
  line-height: 4rem;
  text-align: center;
`;

export default ({ title, issueNumber, bodyHTML }) => (
  <LineupItemWrapper>
    <LineupTitle>
      {issueNumber ? <Link to={`/lineup/${issueNumber}`}>{title}</Link> : title}
    </LineupTitle>
    <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
  </LineupItemWrapper>
);
