import gql from "graphql-tag"
import * as React from "react"
import { Query } from "react-apollo"

interface Data {
  repository: {
    issue: {
      number: number
      title: string
    }
  }
}

interface Variables {
  repositoryOwner: string
  repositoryName: string
  issueNumber: number
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
      }
    }
  }
`

const Post = () => {
  return (
    <SinglePostQuery
      query={SINGLE_POST_QUERY}
      variables={{
        repositoryOwner: "engineerlive",
        repositoryName: "engineer-live-tokyo",
        issueNumber: 2
      }}
    >
      {({ loading, error, data }) => {
        console.log(loading)
        if (loading) {
          return <div>loading...</div>
        }
        if (error) {
          return `Error! ${error.message}`
        }

        if (data) {
          const issue = data.repository.issue

          return (
            <div>
              <div dangerouslySetInnerHTML={{ __html: issue.title }} />
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
