import React from "react";
import { CommentStopDiv } from "./elements";

const CommentStop = ({ text, presentationMode, isStartPoint, isStopPoint }) => (
  <CommentStopDiv
    className={presentationMode ? "presentationmode" : ""}
    isStartPoint={isStartPoint}
    isStopPoint={isStopPoint}
  >
    {text}
  </CommentStopDiv>
);

export default CommentStop;
