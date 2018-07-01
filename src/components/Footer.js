import React from "react";
import styled from "styled-components";

import typography from "../utils/typography";

const Footer = styled.footer`
  color: ${typography.options.lightBodyColor};
  font-size: 0.9em;
  margin: 2.5rem;
  text-align: center;
`;

export default () => <Footer>EngineerLiveTokyo &copy; 2018</Footer>;
