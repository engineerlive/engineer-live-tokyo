import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface PropType {
  title: string
  date: string
  authorName: string
  issueNumber?: number
}

const PostHeader: React.SFC<PropType> = ({
  title,
  date,
  authorName,
  issueNumber
}: PropType) => (
  <PostHeaderElement>
    <h2>
      {issueNumber ? <Link to={`/posts/${issueNumber}`}>{title}</Link> : title}
    </h2>
    <h4 style={{ color: "#acacac" }}>
      {new Date(date).toISOString().split("T")[0]} by {authorName}
    </h4>
  </PostHeaderElement>
)

const PostHeaderElement = styled.div`
  margin-top: 3rem;
`

export default PostHeader
