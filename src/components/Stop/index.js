import React from "react";
import VideoEmbed from "./../VideoEmbed";
import CommentStop from "./../CommentStop";
import { StopWrapper } from "./elements";

const Stop = ({ index, stopData, selectedStop, selectThis }) => {
  const myTitle = stopData.title || `Stop ${index + 1}`;
  return (
    <StopWrapper
      top={index * 100 + 10}
      left={index * 100 + 10}
      className={selectedStop === stopData.id ? "selected" : ""}
      onClick={(e) => {
        e.stopPropagation();
        selectThis(stopData.id);
      }}
    >
      <h2>{myTitle}</h2>
      {stopData.type && stopData.type === "video" ? (
        <VideoEmbed src={stopData.url} />
      ) : stopData.type && stopData.type === "comment" ? (
        <CommentStop text={stopData.text} />
      ) : (
        <div>{JSON.stringify(stopData)}</div>
      )}
    </StopWrapper>
  );
};

export default Stop;
