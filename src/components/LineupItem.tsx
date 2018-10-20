import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface PropType {
  title: string
  issueNumber: number
  bodyHTML: string
  thumbnail: boolean
}

export default ({ title, issueNumber, bodyHTML, thumbnail }: PropType) => (
  <LineupItemWrapper>
    <LineupTitle>{title}</LineupTitle>
    <div
      dangerouslySetInnerHTML={{
        __html: thumbnail ? createThumbnail(bodyHTML) : bodyHTML
      }}
    />
    <div>
      <Link to={`/lineup/${issueNumber}`}>
        {title}
        の紹介ページ
      </Link>
    </div>
  </LineupItemWrapper>
)

const createThumbnail = (html: string): string => {
  const re = /<img src="(https?:\/\/.+?)".+?>/
  const matches = html.match(re)
  if (matches) {
    return `<img src="${matches[1]}">`
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
  font-size: 1.6rem;
  line-height: 3rem;
  text-align: center;
`
