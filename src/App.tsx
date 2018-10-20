import * as React from "react"
import { Helmet } from "react-helmet"
// import { Link, Route, Switch } from "react-router-dom"
import { Route, Switch } from "react-router-dom"
import { GoogleFont, TypographyStyle } from "react-typography"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Post from "./components/Post"
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
        <Header />
        <div
          className="main"
          style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          <div>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/posts" component={Post} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
