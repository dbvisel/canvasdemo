import walkData from "./src/assets/walkData.js";
import Config from "./src/config.js";
import captureWebsite from "capture-website";

const urlsToGet = [];

for (let i = 0; i < walkData.walks.length; i++) {
  const thisWalk = walkData.walks[i];
  const thisId = walkData.walks[i].id;
  for (let j = 0; j < thisWalk.stops.length; j++) {
    const thisStop = thisWalk.stops[j];
    if (thisStop.url) {
      const newStop = thisStop;
      newStop.filename = thisId + "-" + newStop.id;
      newStop.width = newStop.width || Config.defaultSizes[newStop.type].width;
      newStop.height =
        newStop.height || Config.defaultSizes[newStop.type].height;
      urlsToGet[urlsToGet.length] = newStop;
    }
  }
}

for (let i = 0; i < urlsToGet.length; i++) {
  const thisWebsite = urlsToGet[i];
  console.log(`Downloading ${thisWebsite.url}`);
  (async () => {
    await captureWebsite.file(
      thisWebsite.url,
      `public/images/${thisWebsite.filename}.png`,
      {
        width: thisWebsite.width,
        height: thisWebsite.height,
        type: "png",
        delay: 10,
      }
    );
  })();
}
