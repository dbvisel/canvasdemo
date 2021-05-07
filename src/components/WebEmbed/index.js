import React from "react";
import { WebEmbedWrapper } from "./elements";

const WebEmbed = ({ src, width = 640, height = 480, presentationMode }) => (
  <WebEmbedWrapper presentationMode={presentationMode} wrapperWidth={width}>
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
  </WebEmbedWrapper>
);

export default WebEmbed;
