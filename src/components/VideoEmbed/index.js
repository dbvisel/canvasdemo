import React from "react";
import { VideoEmbedWrapper } from "./elements";

const VideoEmbed = ({ src, width = 640, height = 480, presentationMode }) => (
  <VideoEmbedWrapper presentationMode={presentationMode}>
    <iframe
      src={src}
      width={presentationMode ? "100%" : width}
      height={presentationMode ? "100%" : height}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      title={src}
    />
  </VideoEmbedWrapper>
);

export default VideoEmbed;
