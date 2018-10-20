import * as React from "react"
import styled from "styled-components"

export default () => <Spinner />

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(180, 180, 180, 0.3);
  border-radius: 50%;
  border-top-color: #aaa;
  margin: 0 auto;
  animation: spin 1s ease-in-out infinite;

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
