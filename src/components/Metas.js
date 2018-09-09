import React from "react";
import Helmet from "react-helmet";

export default ({ title, description, url, imageUrl }) => (
  <Helmet>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | EngineerLiveTokyo`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content={imageUrl} />
  </Helmet>
);
