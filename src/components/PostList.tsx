import gql from "graphql-tag"
import * as React from "react"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"

import PostExcerpt from "./PostExcerpt"
import PostHeader from "./PostHeader"
import SectionTitle from "./SectionTitle"
import Spinner from "./Spinner"

interface Data {
  repository: {
    issues: {
      edges: Array<{
        node: {
          id: number
          number: number
          title: string
          bodyText: string
          createdAt: string
          author: {
            login: string
          }
        }
      }>
      totalCount: number
      pageInfo: {
        endCursor: number
        startCursor: number
        hasNextPage: boolean
        hasPreviousPage: boolean
      }
    }
  }
}

interface Variables {
  repositoryOwner: string
  repositoryName: string
  numberOfPosts: number
}

interface PropType {
  numberOfPosts: number
}

class PostListQuery extends Query<Data, Variables> {}

const POST_LIST_QUERY = gql`
  query postListQuery(
    $repositoryOwner: String!
    $repositoryName: String!
    $numberOfPosts: Int!
  ) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issues(
        first: $numberOfPosts
        labels: ["post"]
        states: [OPEN]
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          node {
            id
            number
            title
            bodyText
            createdAt
            author {
              login
            }
          }
        }
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`

const PostList: React.SFC<PropType> = ({ numberOfPosts }) => {
  return (
    <PostListQuery
      query={POST_LIST_QUERY}
      variables={{
        repositoryOwner: "engineerlive",
        repositoryName: "engineer-live-tokyo",
        numberOfPosts
      }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div>
              <SectionTitle>NEWS</SectionTitle>
              <Spinner />
            </div>
          )
        }

        if (error) {
          return `Error! ${error.message}`
        }

        if (data) {
          const posts = data.repository.issues.edges

          return (
            <div>
              <SectionTitle>NEWS</SectionTitle>
              {posts.map(({ node }) => {
                return (
                  <div key={node.id}>
                    <PostHeader
                      title={node.title}
                      date={node.createdAt}
                      authorName={node.author.login}
                      issueNumber={node.number}
                    />
                    <PostExcerpt text={node.bodyText} />
                    <div style={{ textAlign: "right" }}>
                      <Link to={`/posts/${node.number}`}>
                        &gt;&gt; READ MORE
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        } else {
          return null
        }
      }}
    </PostListQuery>
  )
}

export default PostList
