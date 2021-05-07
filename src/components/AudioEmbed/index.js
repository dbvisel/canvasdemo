import React from "react";
import { AudioEmbedWrapper } from "./elements";

const AudioEmbed = ({ src, width = 640, height = 30, presentationMode }) => (
  <AudioEmbedWrapper presentationMode={presentationMode}>
    <iframe
      src={src}
      width={presentationMode ? "100%" : width}
      height={height}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      title={src}
    />
  </AudioEmbedWrapper>
);

export default AudioEmbed;
