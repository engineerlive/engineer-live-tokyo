import * as React from "react"
import styled from "styled-components"

import ConnpassLink from "./ConnpassLink"
import homeImage from "./home-image.png"

const Home: React.SFC<{}> = () => {
  return (
    <Container>
      <div>
        <HomeImage src={homeImage} alt="eng-live-image" />
      </div>
      <SiteTitle>EngineerLiveTokyo</SiteTitle>
      <Information>
        <div>2018.11.25 (日)</div>
        <div>@ 真昼の月・夜の太陽</div>
        <div>
          <a
            href="http://mahiru-yoru.com/index.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            http://mahiru-yoru.com/index.html
          </a>
        </div>
      </Information>
      <ConnpassLink />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const HomeImage = styled.img`
  max-height: 500px;
`

const SiteTitle = styled.h1`
  font-family: "Press Start 2P";
  text-align: center;
`

const Information = styled.div`
  line-height: 2em;
`

export default Home
