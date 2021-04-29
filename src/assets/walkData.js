/** This file could be JSON! I'm including it as a JS module simply so that I can include comments.
 *
 * A walk consists of an array of stops and some basic metadata
 *
 * Each stop consists of:
 *
 * id: A unique ID for the stop
 * isStartPoint: boolean, true if this stop can be a starting point for a walk.
 * isStopPoint: boolean, true is this stop can be a stopping point for a walk.
 * nextStop: an array of IDs of stops that this stop should continue on to.
 * type: enum ("video" | "audio" | "book")
 * url: for type video or audio, the embed link.
 * width: number
 * height: number
 *
 * */

const walkData = {
  id: "walk0",
  title: "Sample Walk",
  author: "Dan Visel",
  date: "25 April 2021",
  stops: [
    {
      id: "stop1",
      type: "comment",
      text: "This is the very first stop. It's just this text",
      isStartPoint: true,
      nextStop: ["stop2"],
    },
    {
      id: "stop2",
      type: "video",
      url: "https://archive.org/embed/peril_of_doc_ock",
      nexstStop: ["stop3"],
    },
    { id: "stop3", nexstStop: ["stop4"] },
    { id: "stop4", nexstStop: ["stop5"] },
    { id: "stop5", nexstStop: ["stop6"] },
    { id: "stop6", nexstStop: ["stop7"] },
    { id: "stop7", nexstStop: ["stop8"] },
    {
      id: "stop8",
      type: "comment",
      text: "This is the last stop!",
      isStopPoint: true,
    },
  ],
};

export default walkData;
