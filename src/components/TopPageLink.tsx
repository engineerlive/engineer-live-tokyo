import * as React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

const TopPageLink: React.SFC<{}> = () => (
  <TopPageLinkElement>
    <Link to="/">EngineerLiveTokyo トップページ</Link>
  </TopPageLinkElement>
)

const TopPageLinkElement = styled.div`
  font-size: 0.9em;
  text-align: center;
`

export default TopPageLink
