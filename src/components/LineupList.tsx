import gql from "graphql-tag"
import * as React from "react"
import { Query } from "react-apollo"
import styled from "styled-components"

// import { repositorySettings, siteSettings } from "../config"
import { repositorySettings } from "../config"
import LineupItem from "./LineupItem"
import SectionTitle from "./SectionTitle"

// import LineupItem from "./LineupItem"
// import Metas from "./Metas"
import Spinner from "./Spinner"

interface Data {
  repository: {
    issues: {
      edges: Array<{
        node: {
          id: number
          number: number
          title: string
          bodyHTML: string
          createdAt: string
        }
      }>
    }
  }
}

interface Variables {
  repositoryOwner: string
  repositoryName: string
}

class LineupListQuery extends Query<Data, Variables> {}

const LINEUP_LIST_QUERY = gql`
  query lineupListQuery($repositoryOwner: String!, $repositoryName: String!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issues(
        first: 10
        labels: ["lineup"]
        states: [OPEN]
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          node {
            id
            number
            title
            bodyHTML
            createdAt
          }
        }
      }
    }
  }
`

const LineupList: React.SFC<{}> = () => {
  return (
    <LineupListQuery
      query={LINEUP_LIST_QUERY}
      variables={{
        repositoryOwner: repositorySettings.owner,
        repositoryName: repositorySettings.name
      }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div>
              <SectionTitle>LINEUP</SectionTitle>
              <Spinner />
            </div>
          )
        }

        if (error) {
          return `Error! ${error.message}`
        }

        if (data) {
          const lineups = data.repository.issues.edges

          return (
            <div>
              {/* <Metas
              title="LINEUP"
              description="エンジニアライブ東京の出演者ページ"
              url={`${siteSettings.url}/lineup`}
              imageUrl={`${siteSettings.url}/ogp-image.png`}
            /> */}
              <SectionTitle>LINEUP</SectionTitle>
              <LineupContainer>
                {lineups.map(({ node }) => {
                  return (
                    <LineupItem
                      key={node.id}
                      issueNumber={node.number}
                      title={node.title}
                      bodyHTML={node.bodyHTML}
                      thumbnail={true}
                    />
                  )
                })}
              </LineupContainer>
            </div>
          )
        } else {
          return null
        }
      }}
    </LineupListQuery>
  )
}

const LineupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  margin: 0 0 2em;
`

export default LineupList
