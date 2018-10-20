import ApolloClient from "apollo-boost"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation =>
    new Promise((resolve, reject) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
          }`
        }
      })
      resolve()
    })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
