import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { repositorySettings, siteSettings } from "../config";
import PostHeader from "./PostHeader";
import Spinner from "./Spinner";
import Metas from "./Metas";

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
        bodyText
        createdAt
        author {
          login
          avatarUrl
        }
      }
    }
  }
`;

export default props => {
  // Prerendering support
  window.prerenderReady = false;

  return (
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

        // Prerendering support
        window.prerenderReady = true;

        return (
          <div>
            <Metas
              title={issue.title}
              description={issue.bodyText.replace(/\r?\n/g, " ").substr(0, 100)}
              url={`${siteSettings.url}/posts/${issue.number}`}
              imageUrl={`${siteSettings.url}/ogp-image.png`}
            />
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
};
