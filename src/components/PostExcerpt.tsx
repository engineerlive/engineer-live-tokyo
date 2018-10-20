import * as React from "react"

interface PropType {
  html: string
}

const PostExcerpt: React.SFC<PropType> = ({ html }: PropType) => {
  const text = html.replace(/<(?:.|\n)*?>/gm, "").substr(1, 200)
  return <div>{text} ...</div>
}

export default PostExcerpt
