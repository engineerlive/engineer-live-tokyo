import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`
      }
    });
  }
});

export const repositorySettings = {
  owner: "engineerlive",
  name: "engineer-live-tokyo"
};

export const siteSettings = {
  url: "https://engineer-live-tokyo.netlify.com"
};
