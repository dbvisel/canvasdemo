/** This file could be JSON! I'm including it as a JS module simply so that I can include comments.
 *
 * A walk consists of an array of stops and some basic metadata
 *
 * id: string, a unique ID, required
 * title, string, the title for the walk
 * stops: an array of stops, required
 *
 * Each stop consists of:
 *
 * id: string, a unique ID for the stop, required
 * type: enum ("video" | "audio" | "book" | "comment" | "image" | "web") – this isn't required, but if it's not there (or not one of those), you'll just see JSON in the stop.
 * title: string, a name for the stop (if desired)
 * isStartPoint: boolean, true if this stop can be a starting point for a walk.
 * isStopPoint: boolean, true is this stop can be a stopping point for a walk.
 * nextStop: an array of IDs of stops that this stop should continue on to.
 * url: for type video, audio, book, image, or web the embed link.
 * width: number, width in pixels
 * height: number, height in pixels
 * left: number, distance in pixels from left
 * top: number, distance in pixels from top
 * text: string, comment on a stop
 *
 * Web embed URLs aren't being broken down – so if you want a 1-up book, use this:
 *
 * url: "https://archive.org/embed/encyclopedia-britannica-and-intellectual-tools-of-the-future/page/n7/mode/1up?view=theater&ui=embed"
 *
 * while if you wanted it 2-up, you could use this:
 *
 * url: "https://archive.org/embed/encyclopedia-britannica-and-intellectual-tools-of-the-future/page/n7/mode/2up?view=theater&ui=embed"
 *
 * I'm not 100% sure about the best URL formats for embeds, and maybe these could be improved and then parameterized.
 *
 * ## NOTES
 *
 * * Maybe previous/next stops should have names for when there are multiple destinations?
 *
 **/

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
          url: "https://archive.org/embed/ssfPPIE1915",
          text:
            "This is an embedded video clip. It can also have comment data in it, like this.",
          nextStop: ["stop3"],
          top: 60,
          left: 300,
        },
        {
          id: "stop3",
          type: "comment",
          text:
            "A stop can be an embedded object (like the video) or it can just be a comment (like this one). We can also embed images and books.",
          nextStop: ["stop4"],
          top: 300,
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
            "This is a book viewer embed. I've done this as 1-up, though it could be done as 2-up. Note that it's going to a specific page.",
          left: 10,
          top: 700,
        },
        {
          id: "stop5",
          type: "comment",
          text:
            "One thing about these stops – you can drag them around if you don’t like where they are. And because the objects are big, you may have to scroll.",
          nextStop: ["stop6"],
          left: 1210,
          top: 500,
        },
        {
          id: "stop6",
          title: "An image embed",
          type: "image",
          url:
            "https://archive.org/embed/mma_nakht_and_family_fishing_and_fowling_tomb_of_nakht_548578",
          nextStop: ["stop7"],
          width: 200,
          height: 200,
          left: 610,
          top: 650,
        },
        {
          id: "stop7",
          title: "A Wayback Machine embed",
          type: "web",
          url:
            "https://web.archive.org/web/19961219003318/http://voyagerco.com/projects/",
          text: "Need to figure out a better URL scheme for this!",
          nextStop: ["stop8"],
          width: 600,
          left: 810,
          top: 800,
        },
        {
          id: "stop8",
          type: "comment",
          text: "This is the last stop!",
          isStopPoint: true,
          left: 1300,
          top: 900,
        },
      ],
    },
    {
      id: "walk1",
      title: "Loop demo",
      author: "Dan Visel",
      date: "25 April 2021",
      stops: [
        {
          id: "stop1",
          type: "comment",
          text: "This walk has a loop in it!",
          title: "Regular Stop 1",
          isStartPoint: true,
          nextStop: ["stop2"],
          top: 10,
          left: 10,
        },
        {
          id: "stop2",
          title: "Example of embedding audio",
          type: "audio",
          url:
            "https://archive.org/embed/amateur_cracksman_librivox/amateur_cracksman_01_hornung.mp3",
          nextStop: ["stop3"],
          height: 30,
          top: 110,
          left: 10,
        },
        {
          id: "stop3",
          title: "Regular Stop 3",
          type: "comment",
          text: "This is stop 3",
          nextStop: ["stop4"],
          top: 210,
          left: 10,
        },
        {
          id: "stop4",
          title: "Decision point",
          type: "comment",
          text: "This is stop 4. From here you can go two ways.",
          nextStop: ["stop4-1", "stop5"],
          top: 310,
          left: 10,
        },
        {
          id: "stop4-1",
          title: "Loop 1",
          type: "comment",
          text: "This is loop stop 1!",
          nextStop: ["stop4-2"],
          top: 310,
          left: 400,
        },
        {
          id: "stop4-2",
          title: "Loop 2",
          type: "comment",
          text: "This is loop stop 2!",
          nextStop: ["stop4-3"],
          top: 410,
          left: 400,
        },
        {
          id: "stop4-3",
          title: "Loop 3",
          type: "comment",
          text: "This is loop stop 3!",
          nextStop: ["stop4-4"],
          top: 510,
          left: 400,
        },
        {
          id: "stop4-4",
          title: "Loop 4",
          type: "comment",
          text: "This is loop stop 4!",
          nextStop: ["stop4"],
          top: 610,
          left: 400,
        },
        {
          id: "stop5",
          title: "Regular Stop 5",
          type: "comment",
          text: "This is stop 5.",
          nextStop: ["stop6"],
          top: 410,
          left: 10,
        },
        {
          id: "stop6",
          title: "Regular Stop 6",
          type: "comment",
          text: "This is stop 6.",
          nextStop: ["stop7"],
          top: 510,
          left: 10,
        },
        {
          id: "stop7",
          type: "comment",
          title: "Regular Stop 7",
          text: "This is stop 7.",
          nextStop: ["stop8"],
          top: 610,
          left: 10,
        },
        {
          id: "stop8",
          type: "comment",
          title: "Regular Stop 8",
          text: "This is the last stop!",
          isStopPoint: true,
          top: 710,
          left: 10,
        },
      ],
    },
    {
      id: "walk2",
      title: "Software embed demo",
      author: "Dan Visel",
      date: "6 May 2021",
      stops: [
        {
          id: "stop8",
          type: "comment",
          title: "Here's something to try",
          text:
            "We can also embed software running in an emulator. (Note that if that's too loud, press the space bar to pause it – and ESC to get your pointer back.",
          isStartPoint: true,
        },
        {
          id: "stop2_1",
          title: "The Secret of Monkey Island",
          type: "software",
          url: "https://archive.org/embed/mnkyega",
          top: 10,
          left: 300,
          width: 640,
          heigh: 480,
        },
      ],
    },
  ],
};

export default walkData;
