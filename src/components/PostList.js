import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { repositorySettings } from "../config";
import PostHeader from "./PostHeader";
import Spinner from "./Spinner";

const POSTS_PER_PAGE = 10;

const ALL_POSTS_QUERY = gql`
  query allPostsQuery($repositoryOwner: String!, $repositoryName: String!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issues(first: ${POSTS_PER_PAGE}, labels: ["post"], states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            id
            number
            title
            createdAt
            author {
              login
              avatarUrl
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
`;

export default () => (
  <Query
    query={ALL_POSTS_QUERY}
    variables={{
      repositoryOwner: repositorySettings.owner,
      repositoryName: repositorySettings.name
    }}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <Fragment>
            <h1>お知らせ</h1>
            <Spinner />
          </Fragment>
        );
      if (error) return `Error! ${error.message}`;

      const posts = data.repository.issues.edges;

      return (
        <div>
          <h1>お知らせ</h1>
          {posts.map(({ node }) => {
            return (
              <PostHeader
                key={node.id}
                title={node.title}
                date={node.createdAt}
                authorName={node.author.login}
                issueNumber={node.number}
              />
            );
          })}
        </div>
      );
    }}
  </Query>
);
