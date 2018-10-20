import * as React from "react"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Post from "./components/Post"

import "./App.css"

class App extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <Link to="/posts">お知らせ</Link>
        </div>
        <div className="main">
          <div>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/posts" component={Post} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App
