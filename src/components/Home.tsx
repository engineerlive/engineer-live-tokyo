import * as React from "react"

import About from "./About"
import LineupList from "./LineupList"
import PostList from "./PostList"
import TopInformation from "./TopInformation"

const Home = () => (
  <div>
    <TopInformation />
    <About summary={true} />
    <LineupList />
    <PostList numberOfPosts={10} />
  </div>
)

export default Home
