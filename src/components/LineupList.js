import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { repositorySettings, siteSettings } from "../config";
import Spinner from "./Spinner";
import Metas from "./Metas";
import LineupItem from "./LineupItem";

const ALL_LINEUP_QUERY = gql`
  query allLineupQuery($repositoryOwner: String!, $repositoryName: String!) {
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
`;

export default () => {
  // Prerendering support
  window.prerenderReady = false;

  return (
    <Query
      query={ALL_LINEUP_QUERY}
      variables={{
        repositoryOwner: repositorySettings.owner,
        repositoryName: repositorySettings.name
      }}
    >
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Fragment>
              <h1>LINEUP</h1>
              <Spinner />
            </Fragment>
          );
        if (error) return `Error! ${error.message}`;

        const lineups = data.repository.issues.edges;

        // Prerendering support
        window.prerenderReady = true;

        return (
          <div>
            <Metas
              title="LINEUP"
              description="エンジニアライブ東京の出演者ページ"
              url={`${siteSettings.url}/lineup`}
              imageUrl={`${siteSettings.url}/ogp-image.png`}
            />
            <h1>LINEUP</h1>
            {lineups.map(({ node }) => {
              return (
                <LineupItem
                  key={node.id}
                  issueNumber={node.number}
                  title={node.title}
                  bodyHTML={node.bodyHTML}
                />
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};
