import React from "react";
import { SoftwareEmbedWrapper } from "./elements";

const SoftwareEmbed = ({
  src,
  width = 640,
  height = 480,
  presentationMode,
}) => (
  <SoftwareEmbedWrapper presentationMode={presentationMode}>
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
  </SoftwareEmbedWrapper>
);

export default SoftwareEmbed;
