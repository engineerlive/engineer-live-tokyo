import * as React from "react"
import styled from "styled-components"

interface PropType {
  children: any
}

export default (props: PropType) => (
  <SectionTitle>{props.children}</SectionTitle>
)

const SectionTitle = styled.h1`
  font-family: "Press Start 2P";
  margin-top: 4em;
  text-align: center;
  border-bottom: solid 1px #565656;
  padding: 0.5em;
`
