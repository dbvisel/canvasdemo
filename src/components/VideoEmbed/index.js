import React from "react";

const VideoEmbed = ({ src, width = 640, height = 480, top = 0, left = 0 }) => (
  <iframe
    src={src}
    width={width}
    height={height}
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    title={src}
  />
);

export default VideoEmbed;
