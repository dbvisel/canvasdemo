import React from "react";
import VideoEmbed from "./../VideoEmbed";
import CommentStop from "./../CommentStop";
import { StopWrapper } from "./elements";

const Walk = ({ stops }) => {
  return (
    <React.Fragment>
      {stops.map((stop, index) => (
        <StopWrapper key={index} top={index * 100} left={index * 100}>
          {stop.type && stop.type === "video" ? (
            <VideoEmbed src={stop.url} />
          ) : stop.type && stop.type === "comment" ? (
            <CommentStop text={stop.text} />
          ) : (
            <div>{JSON.stringify(stop)}</div>
          )}
        </StopWrapper>
      ))}
    </React.Fragment>
  );
};

export default Walk;
