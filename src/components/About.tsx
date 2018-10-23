import * as React from "react"

import SectionTitle from "./SectionTitle"

interface PropType {
  summary: boolean
}

const About: React.SFC<PropType> = props => {
  return (
    <div>
      <SectionTitle>ABOUT</SectionTitle>
      <div style={{ textAlign: "center" }}>
        {props.summary ? (
          <div>
            <p>
              エンジニアライブ東京は、各所の "エンジニア"
              が一夜限定で音楽の腕をふるう対バンイベントです。
            </p>
            <p>
              弾き語りからバンド、そしてラップまで、さまざまなグループが参加するバラエティ豊かな内容！いつも職場やコミュニティ活動で見ているあの人のちょっと違う一面が、ここでなら見られるかも？
            </p>
            <p>ぜひ私たちの「もうひとつの本気」を見に来てください！</p>
          </div>
        ) : (
          "WIP"
        )}
      </div>
    </div>
  )
}

export default About
