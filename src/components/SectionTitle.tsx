import * as React from "react"
import styled from "styled-components"

interface PropType {
  children: any
}

const SectionTitle: React.SFC<PropType> = props => (
  <SectionTitleElement>{props.children}</SectionTitleElement>
)

const SectionTitleElement = styled.h1`
  font-family: "Press Start 2P";
  margin-top: 4em;
  text-align: center;
  border-bottom: solid 1px #565656;
  padding: 0.5em;
`

export default SectionTitle
