import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GoogleFont, TypographyStyle } from "react-typography";
import styled from "styled-components";

import typography from "./utils/typography";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostList from "./components/PostList";
import Post from "./components/Post";
import LineupList from "./components/LineupList";
import Lineup from "./components/Lineup";
import NotFound from "./components/NotFound";

const Main = styled.main`
  max-width: 960px;
  padding: 0.75rem;
  margin: 1.5rem auto 0;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="ja" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Helmet>
        <Header />
        <Main className="main">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/posts" component={PostList} />
            <Route exact={true} path="/lineup" component={LineupList} />
            <Route path="/posts/:number" component={Post} />
            <Route path="/lineup/:number" component={Lineup} />
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
