import React from "react";
import styled from "styled-components";

import typography from "../utils/typography";

const Footer = styled.footer`
  color: ${typography.options.lightBodyColor};
  font-size: 0.9em;
  margin: 2.5rem;
  text-align: center;
`;

export default () => (
  <Footer>
    <div>EngineerLiveTokyo &copy; 2018 </div>
    <div>
      <a
        href="https://github.com/engineerlive/engineer-live-tokyo"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </Footer>
);
