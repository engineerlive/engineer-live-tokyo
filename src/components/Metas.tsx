import * as React from "react"
import { Helmet } from "react-helmet"

interface PropType {
  title: string
  description: string
  url: string
  imageUrl: string
}

const Metas: React.SFC<PropType> = ({
  title,
  description,
  url,
  imageUrl
}: PropType) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title}`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content={imageUrl} />
  </Helmet>
)

export default Metas
