import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { repositorySettings, siteSettings } from "../config";
import LineupItem from "./LineupItem";
import Spinner from "./Spinner";
import Metas from "./Metas";
import youtubify from "../utils/youtubify";

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
`;

export default props => {
  // Prerendering support
  window.prerenderReady = false;

  return (
    <Query
      query={SINGLE_LINEUP_QUERY}
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

        const imgTagPattern = /<img.*?src="(.*?)"/;
        const imgSrc = imgTagPattern.exec(issue.bodyHTML)[1];
        const bodyHTML = youtubify(issue.bodyHTML);

        return (
          <div>
            <Metas
              title={issue.title}
              description={issue.bodyText.replace(/\r?\n/g, " ").substr(0, 100)}
              url={`${siteSettings.url}/lineup/${issue.number}`}
              imageUrl={imgSrc}
            />
            <LineupItem
              key={issue.id}
              title={issue.title}
              bodyHTML={bodyHTML}
            />
            <div style={{ textAlign: "center" }}>
              <Link to="/lineup">&lt; LINEUP ページに戻る</Link>
            </div>
          </div>
        );
      }}
    </Query>
  );
};
