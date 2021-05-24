import React from "react";
import { useDrop } from "react-dnd";
// import walkData from "../../assets/walkData";
import Stop from "./../Stop";

//TODO: deal with sideTrips

export const ItemTypes = { STOP: "stop" };

const getCenter = (stop) => {
  // TODO: deal with missing .left, .top, .width, .height
  if (stop.width && stop.left && stop.top && stop.height) {
    const centerX = stop.left + stop.width / 2;
    const centerY = stop.top + stop.height / 2;
    return { x: centerX, y: centerY };
  }
  console.log(stop);
  return { x: "missing!", y: "missing!" };
};

const Walk = ({
  stops,
  selectedStop,
  setSelectedStop,
  showAnnotation,
  walkId,
  setPresentationMode,
}) => {
  const [boxes, setBoxes] = React.useState([]);
  const [myWidth, setMyWidth] = React.useState("100%");
  const [myHeight, setMyHeight] = React.useState("100%");
  const innerCanvas = React.useRef(null);

  React.useEffect(() => {
    if (!boxes.length) {
      console.log("Setting boxes!");
      const newBoxes = [];
      for (let i = 0; i < stops.length; i++) {
        newBoxes[i] = stops[i];
        newBoxes[i].index = i;
        if (typeof stops[i].top === "undefined") {
          newBoxes[i].top = i * 100 + 10;
        }
        if (typeof stops[i].left === "undefined") {
          newBoxes[i].left = i * 100 + 10;
        }
      }
      setBoxes(newBoxes);
    }
  }, [stops, boxes.length]);

  const moveBox = React.useCallback(
    (index, left, top) => {
      const newBoxes = boxes;
      newBoxes[index].left = left;
      newBoxes[index].top = top;
      setBoxes(newBoxes);
    },
    [boxes, setBoxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.STOP,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.index, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  React.useEffect(() => {
    //TODO: make this fire when everything has been drawn!
    if (innerCanvas.current) {
      const stops = innerCanvas.current.querySelectorAll(".stop");
      if (stops.length) {
        let rightMost = 0;
        let bottomMost = 0;
        for (let i = 0; i < stops.length; i++) {
          const thisSize = stops[i].getBoundingClientRect();
          rightMost = Math.max(rightMost, thisSize.x + thisSize.width);
          bottomMost = Math.max(bottomMost, thisSize.y + thisSize.height);
        }
        console.log(rightMost, bottomMost);
        const padding = 100;
        setMyWidth(rightMost + padding + "px");
        setMyHeight(bottomMost + padding + "px");
      }
    }
  }, []);

  const getNextStop = (id) => {
    if (id) {
      const results = stops.filter((x) => x.id === id);
      if (results.length) {
        return results[0];
      }
    }
    return null;
  };

  return (
    <div style={{ width: myWidth, height: myHeight }} ref={innerCanvas}>
      <div ref={drop} style={{ width: "100%", height: "100%" }}>
        {boxes.map((stop, index) => {
          if (stop.nextStop) {
            const nextStop = getNextStop(stop.nextStop);
            console.log(getCenter(stop), getCenter(nextStop));
          }
          return (
            <React.Fragment key={stop.id}>
              <Stop
                key={stop.id}
                index={index}
                stopData={stop}
                selectedStop={selectedStop}
                showAnnotation={showAnnotation}
                setPresentationMode={setPresentationMode}
                selectThis={() => {
                  setSelectedStop(stop.id);
                }}
                walkId={walkId}
              />
              {stop.nextStop ? <div></div> : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Walk;
