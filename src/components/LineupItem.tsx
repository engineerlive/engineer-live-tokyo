import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface PropType {
  title: string
  issueNumber?: number
  bodyHTML: string
  thumbnail: boolean
}

const LineupItem: React.SFC<PropType> = ({
  title,
  issueNumber,
  bodyHTML,
  thumbnail
}) => (
  <LineupItemWrapper>
    <LineupTitle>{title}</LineupTitle>
    <div
      dangerouslySetInnerHTML={{
        __html: thumbnail ? createThumbnail(bodyHTML) : bodyHTML
      }}
    />
    <div style={{ textAlign: "center" }}>
      {issueNumber ? (
        <Link to={`/lineup/${issueNumber}`}>
          {title}
          の紹介ページ
        </Link>
      ) : null}
    </div>
  </LineupItemWrapper>
)

const createThumbnail = (html: string): string => {
  const re = /<img src="(https?:\/\/.+?)".+alt="(.+?)".+?>/
  const matches = html.match(re)
  if (matches) {
    return `<img src="${matches[1]}" alt="${
      matches[2]
    }" style="margin-bottom: 10px;">`
  } else {
    return ""
  }
}

const LineupItemWrapper = styled.div`
  margin: 1em 0;
  padding: 1em;
  overflow: auto;
  min-width: 0;
`

const LineupTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
`

export default LineupItem
