import gql from "graphql-tag"
import * as React from "react"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"

import { repositorySettings, siteSettings } from "../config"
import youtubify from "../utils/youtubify"
import LineupItem from "./LineupItem"
import Metas from "./Metas"
import Spinner from "./Spinner"

interface Data {
  repository: {
    issue: {
      number: number
      title: string
      bodyHTML: string
      bodyText: string
    }
  }
}

interface Variables {
  repositoryOwner: string
  repositoryName: string
  issueNumber: number
}

interface PropType {
  match: any
}

declare var window: {
  prerenderReady: boolean
}

class SingleLineupQuery extends Query<Data, Variables> {}

const SINGLE_LINEUP_QUERY = gql`
  query singleLineupQuery(
    $repositoryOwner: String!
    $repositoryName: String!
    $issueNumber: Int!
  ) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issue(number: $issueNumber) {
        number
        title
        bodyHTML
        bodyText
      }
    }
  }
`

const Lineup: React.SFC<PropType> = props => {
  // Prerendering support
  window.prerenderReady = false

  return (
    <SingleLineupQuery
      query={SINGLE_LINEUP_QUERY}
      variables={{
        repositoryOwner: repositorySettings.owner,
        repositoryName: repositorySettings.name,
        issueNumber: parseInt(props.match.params.number, 10)
      }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <Spinner />
        }
        if (error) {
          return `Error! ${error.message}`
        }

        if (data) {
          const issue = data.repository.issue

          // Prerendering support
          window.prerenderReady = true

          const imgTagPattern = /<img.*?src="(.*?)"/
          const matches = imgTagPattern.exec(issue.bodyHTML)
          const imgSrc = matches
            ? matches[1]
            : `${siteSettings.url}/ogp-image.png`
          const bodyHTML = youtubify(issue.bodyHTML)

          return (
            <div>
              <Metas
                title={issue.title}
                description={issue.bodyText
                  .replace(/\r?\n/g, " ")
                  .substr(0, 100)}
                url={`${siteSettings.url}/lineup/${issue.number}`}
                imageUrl={imgSrc}
              />
              <LineupItem
                title={issue.title}
                bodyHTML={bodyHTML}
                thumbnail={false}
              />
              <div style={{ fontSize: "0.9em", textAlign: "center" }}>
                <Link to="/">EngineerLiveTokyo トップページ</Link>
              </div>
            </div>
          )
        } else {
          return null
        }
      }}
    </SingleLineupQuery>
  )
}

export default Lineup
