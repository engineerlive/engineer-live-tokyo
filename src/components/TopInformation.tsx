import * as React from "react"
import styled from "styled-components"

import homeImage from "./home-image.png"
import homeLogo from "./home-logo.png"

const Home = () => {
  return (
    <Container>
      <div>
        <HomeImage src={homeImage} />
      </div>
      <div>
        <LogoImage src={homeLogo} />
      </div>
      <Information>
        <div>2018.11.25 (日)</div>
        <div>@ 真昼の月・夜の太陽</div>
        <div>
          <a href="http://mahiru-yoru.com/index.html">
            http://mahiru-yoru.com/index.html
          </a>
        </div>
      </Information>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const HomeImage = styled.img`
  max-height: 500px;
`

const LogoImage = styled.img`
  max-height: 50px;
`

const Information = styled.div`
  line-height: 2em;
`

export default Home
