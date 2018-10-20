import * as React from "react"
import styled from "styled-components"

const Footer: React.SFC = () => (
  <FooterElement>
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
  </FooterElement>
)

const FooterElement = styled.footer`
  color: #acacac;
  font-size: 0.9em;
  margin: 4rem 2.5rem 2.5rem;
  text-align: center;
`

export default Footer
