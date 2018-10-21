import * as React from "react"

import About from "./About"
import LineupList from "./LineupList"
import PostList from "./PostList"
import TopInformation from "./TopInformation"

declare var window: {
  prerenderReady: boolean
}

const Home: React.SFC<{}> = () => {
  // Prerendering support
  window.prerenderReady = true

  return (
    <div>
      <TopInformation />
      <div id="about">
        <About summary={true} />
      </div>
      <div id="lineup">
        <LineupList />
      </div>
      <div id="news">
        <PostList numberOfPosts={10} />
      </div>
    </div>
  )
}

export default Home
