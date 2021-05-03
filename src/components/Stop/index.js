import React from "react";
import { useDrag } from "react-dnd";
import VideoEmbed from "./../VideoEmbed";
import AudioEmbed from "./../AudioEmbed";
import BookEmbed from "./../BookEmbed";
import ImageEmbed from "./../ImageEmbed";
import CommentStop from "./../CommentStop";
import { StopWrapper, PresentationStopWrapper } from "./elements";
import { ItemTypes } from "./../Walk";

const Stop = ({ index, stopData, selectedStop, selectThis }) => {
  const myTitle = stopData.title || `Stop ${index + 1}`;

  const [, /*{ isDragging }, */ drag] = useDrag(
    () => ({
      type: ItemTypes.STOP,
      item: {
        ...stopData,
        left: stopData.left,
        top: stopData.top,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [stopData]
  );
  // if (isDragging) {
  //   console.log("dragging!", stopData);
  // }

  return (
    <StopWrapper
      top={stopData.top}
      left={stopData.left}
      className={selectedStop === stopData.id ? "selected" : ""}
      onClick={(e) => {
        e.stopPropagation();
        selectThis(stopData.id);
      }}
      ref={drag}
      role="Stop"
    >
      <h2>{myTitle}</h2>
      {stopData.type && stopData.type === "video" ? (
        <VideoEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
        />
      ) : stopData.type && stopData.type === "audio" ? (
        <AudioEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
        />
      ) : stopData.type && stopData.type === "book" ? (
        <BookEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
        />
      ) : stopData.type && stopData.type === "image" ? (
        <ImageEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
        />
      ) : stopData.type && stopData.type === "web" ? (
        <ImageEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
        />
      ) : stopData.type && stopData.type === "comment" ? (
        <CommentStop
          text={stopData.text}
          width={stopData.width}
          height={stopData.height}
        />
      ) : (
        <div>{JSON.stringify(stopData)}</div>
      )}
    </StopWrapper>
  );
};

export default Stop;

export const PresentationStop = ({ stopData, index }) => {
  // console.log(stopData);
  return (
    <PresentationStopWrapper role="Stop">
      {stopData.type && stopData.type === "video" ? (
        <VideoEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
          presentationMode
        />
      ) : stopData.type && stopData.type === "audio" ? (
        <AudioEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
          presentationMode
        />
      ) : stopData.type && stopData.type === "book" ? (
        <BookEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
          presentationMode
        />
      ) : stopData.type && stopData.type === "image" ? (
        <ImageEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
          presentationMode
        />
      ) : stopData.type && stopData.type === "web" ? (
        <ImageEmbed
          src={stopData.url}
          width={stopData.width}
          height={stopData.height}
          presentationMode
        />
      ) : stopData.type && stopData.type === "comment" ? (
        <CommentStop
          text={stopData.text}
          presentationMode
          width={stopData.width}
          height={stopData.height}
          isStartPoint={stopData.isStartPoint}
          isStopPoint={stopData.isStopPoint}
        />
      ) : (
        <div>{JSON.stringify(stopData)}</div>
      )}
    </PresentationStopWrapper>
  );
};
