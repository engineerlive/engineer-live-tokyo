import gql from "graphql-tag"
import * as React from "react"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"

import { repositorySettings, siteSettings } from "../config"
import youtubify from "../utils/youtubify"
import Metas from "./Metas"
import PostHeader from "./PostHeader"
import Spinner from "./Spinner"

interface Data {
  repository: {
    issue: {
      number: number
      title: string
      bodyHTML: string
      bodyText: string
      createdAt: string
      author: {
        login: string
      }
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

class SinglePostQuery extends Query<Data, Variables> {}

const SINGLE_POST_QUERY = gql`
  query singlePostQuery(
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
        createdAt
        author {
          login
        }
      }
    }
  }
`

const Post: React.SFC<PropType> = props => {
  // Prerendering support
  window.prerenderReady = false

  return (
    <SinglePostQuery
      query={SINGLE_POST_QUERY}
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
          const bodyHTML = youtubify(issue.bodyHTML)

          return (
            <div>
              <Metas
                title={`${issue.title} | EngineerLiveTokyo`}
                description={issue.bodyText
                  .replace(/\r?\n/g, " ")
                  .substr(0, 100)}
                url={`${siteSettings.url}/posts/${issue.number}`}
                imageUrl={`${siteSettings.url}/ogp-image.png`}
              />
              <PostHeader
                title={issue.title}
                date={issue.createdAt}
                authorName={issue.author.login}
              />

              <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
              <div style={{ fontSize: "0.9em", textAlign: "center" }}>
                <Link to="/">EngineerLiveTokyo トップページ</Link>
              </div>
            </div>
          )
        } else {
          return null
        }
      }}
    </SinglePostQuery>
  )
}

export default Post
