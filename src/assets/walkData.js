/** This file could be JSON! I'm including it as a JS module simply so that I can include comments.
 *
 * A walk consists of an array of stops and some basic metadata
 *
 * Each stop consists of:
 *
 * id: string, a unique ID for the stop
 * title: string, a name for the stop (if desired)
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
  walks: [
    {
      id: "walk0",
      title: "Sample Walk 1",
      author: "Dan Visel",
      date: "25 April 2021",
      stops: [
        {
          id: "stop1",
          title: "The start point",
          type: "comment",
          text:
            "This is the very first stop. It's just this text. Click on another stop, or the NEXT button to go on.",
          isStartPoint: true,
          nextStop: ["stop2"],
        },
        {
          id: "stop2",
          title: "A video clip",
          type: "video",
          url: "https://archive.org/embed/peril_of_doc_ock",
          text:
            "This is an embedded video clip. It can also have comment data in it, like this.",
          nextStop: ["stop3"],
          top: 10,
          left: 300,
        },
        {
          id: "stop3",
          type: "comment",
          text:
            "A stop can be an embedded object (like the video) or it can just be a comment (like this one).",
          nextStop: ["stop4"],
          top: 10,
          left: 975,
        },
        {
          id: "stop4",
          nextStop: ["stop5"],
          type: "book",
          title: "A book viewer",
          url:
            "https://archive.org/embed/encyclopedia-britannica-and-intellectual-tools-of-the-future/page/n7/mode/1up?view=theater&ui=embed",
          text:
            "This is a book viewer embed. I've done this as 1-up, though it could be done as 2-up.",
          left: 10,
          top: 400,
        },
        { id: "stop5", nextStop: ["stop6"], left: 110, top: 500 },
        { id: "stop6", nextStop: ["stop7"], left: 210, top: 600 },
        { id: "stop7", nextStop: ["stop8"], left: 310, top: 700 },
        {
          id: "stop8",
          type: "comment",
          text: "This is the last stop!",
          isStopPoint: true,
          left: 975,
          top: 800,
        },
      ],
    },
    {
      id: "walk1",
      title: "Sample Walk 2",
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
          title: "Example of embedding video",
          type: "video",
          url: "https://archive.org/embed/peril_of_doc_ock",
          nextStop: ["stop3"],
        },
        {
          id: "stop3",
          type: "video",
          url: "https://archive.org/embed/peril_of_doc_ock",
          nextStop: ["stop4"],
        },
        {
          id: "stop4",
          type: "video",
          url: "https://archive.org/embed/peril_of_doc_ock",
          nextStop: ["stop5"],
        },
        {
          id: "stop5",
          type: "video",
          url: "https://archive.org/embed/peril_of_doc_ock",
          nextStop: ["stop6"],
        },
        { id: "stop6", nextStop: ["stop7"] },
        { id: "stop7", nextStop: ["stop8"] },
        {
          id: "stop8",
          type: "comment",
          text: "This is the last stop!",
          isStopPoint: true,
        },
      ],
    },
  ],
};

export default walkData;
