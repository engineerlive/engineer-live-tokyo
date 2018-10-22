import * as React from "react"
import styled from "styled-components"

const NotFoundElement = styled.div`
  text-align: center;
`

const NotFound: React.SFC<{}> = () => (
  <NotFoundElement>Page Not Found</NotFoundElement>
)

export default NotFound
