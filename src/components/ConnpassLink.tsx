import * as React from "react"
import styled from "styled-components"

const ConnpassLink: React.SFC = () => (
  <ConnpassLinkElement>
    <div style={{ fontSize: "0.9rem", color: "#acacac" }}>
      エンジニアライブを見に行きたい方はこちらのページより参加をご登録ください！
    </div>
    <div>
      <a
        href="https://engineerlive.connpass.com/event/104979/"
        target="_blank"
        rel="noopener noreferrer"
      >
        エンジニアライブ東京 #1 - connpass
      </a>
    </div>
  </ConnpassLinkElement>
)

const ConnpassLinkElement = styled.div`
  margin: 2.5rem;
  text-align: center;
`

export default ConnpassLink
