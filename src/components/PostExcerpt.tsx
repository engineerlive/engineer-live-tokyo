import * as React from "react"

interface PropType {
  text: string
}

const PostExcerpt: React.SFC<PropType> = ({ text }) => {
  const excerpt = text.substr(0, 200)
  return <div>{excerpt} ...</div>
}

export default PostExcerpt
