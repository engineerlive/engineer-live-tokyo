import * as React from "react"
import { Helmet } from "react-helmet"
// import { Link, Route, Switch } from "react-router-dom"
import { Route, Switch } from "react-router-dom"
import { GoogleFont, TypographyStyle } from "react-typography"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Lineup from "./components/Lineup"
import Metas from "./components/Metas"
import NotFound from "./components/NotFound"
import Post from "./components/Post"
import { siteSettings } from "./config"
import typography from "./utils/typography"

import "./App.css"

class App extends React.Component {
  public render() {
    return (
      <div>
        <Helmet>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Helmet>
        <Metas
          title="EngineerLiveTokyo"
          description="エンジニアライブ東京は、各所のエンジニアが一夜限定で音楽の腕をふるう対バンイベントです"
          url={siteSettings.url}
          imageUrl={`${siteSettings.url}/ogp-image.png`}
        />
        <Header />
        <div
          className="main"
          style={{
            margin: "0 auto",
            maxWidth: "960px",
            paddingRight: "1rem",
            paddingLeft: "1rem"
          }}
        >
          <div>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/posts/:number" component={Post} />
              <Route path="/lineup/:number" component={Lineup} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
