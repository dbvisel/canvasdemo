import React from "react";
import { BookEmbedWrapper } from "./elements";

const BookEmbed = ({ src, width = 480, height = 640, presentationMode }) => (
  <BookEmbedWrapper presentationMode={presentationMode}>
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
  </BookEmbedWrapper>
);

export default BookEmbed;
