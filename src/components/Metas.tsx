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
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | EngineerLiveTokyo`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content={imageUrl} />
  </Helmet>
)

export default Metas
