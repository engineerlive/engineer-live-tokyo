import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import LazyLoad from "vanilla-lazyload"

interface PropType {
  title: string
  issueNumber?: number
  bodyHTML: string
  thumbnail: boolean
}

class LineupItem extends React.Component<PropType, {}> {
  public componentDidMount() {
    // tslint:disable-next-line no-unused-expression
    new LazyLoad({
      elements_selector: ".lazy"
    })
  }

  public render() {
    const { title, issueNumber, bodyHTML, thumbnail } = this.props
    return (
      <LineupItemWrapper>
        <LineupTitle>{title}</LineupTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: thumbnail
              ? this.createThumbnail(bodyHTML)
              : this.removeImgLink(bodyHTML)
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
  }

  private removeImgLink(html: string): string {
    const re = /<a target="_blank" rel="noopener noreferrer" href="(https?:\/\/.+?)"><img src="(https?:\/\/.+?)".+alt="(.+?)".+?>/
    return html.replace(re, `<img src="$2" alt="$3">`)
  }

  private createThumbnail(html: string): string {
    const re = /<img src="(https?:\/\/.+?)".+alt="(.+?)".+?>/
    const matches = html.match(re)
    if (matches) {
      return `<img class="lazy" data-src="${matches[1]}" alt="${
        matches[2]
      }" style="margin-bottom: 10px;">`
    } else {
      return ""
    }
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
