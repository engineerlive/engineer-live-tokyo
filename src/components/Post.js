import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { repositorySettings } from "../config";
import PostHeader from "./PostHeader";
import Spinner from "./Spinner";

const SINGLE_POST_QUERY = gql`
  query singlePostQuery(
    $repositoryOwner: String!
    $repositoryName: String!
    $issueNumber: Int!
  ) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issue(number: $issueNumber) {
        title
        bodyHTML
        createdAt
        author {
          login
          avatarUrl
        }
      }
    }
  }
`;

export default props => (
  <Query
    query={SINGLE_POST_QUERY}
    variables={{
      repositoryOwner: repositorySettings.owner,
      repositoryName: repositorySettings.name,
      issueNumber: parseInt(props.match.params.number, 10)
    }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      if (error) return `Error! ${error.message}`;

      const issue = data.repository.issue;

      return (
        <div>
          <PostHeader
            key={issue.id}
            title={issue.title}
            date={issue.createdAt}
            authorName={issue.author.login}
          />
          <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
        </div>
      );
    }}
  </Query>
);
