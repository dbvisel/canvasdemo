import React from "react";
import { ImageEmbedWrapper } from "./elements";

const ImageEmbed = ({ src, width = 480, height = 480, presentationMode }) => (
  <ImageEmbedWrapper presentationMode={presentationMode}>
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
  </ImageEmbedWrapper>
);

export default ImageEmbed;
