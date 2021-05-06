import React from "react";
import { useDrop } from "react-dnd";
import Stop from "./../Stop";

export const ItemTypes = { STOP: "stop" };

const Walk = ({
  stops,
  selectedStop,
  setSelectedStop,
  showAnnotation,
  walkId,
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

  return (
    <div style={{ width: myWidth, height: myHeight }} ref={innerCanvas}>
      <div ref={drop} style={{ width: "100%", height: "100%" }}>
        {boxes.map((stop, index) => (
          <Stop
            key={stop.id}
            index={index}
            stopData={stop}
            selectedStop={selectedStop}
            showAnnotation={showAnnotation}
            selectThis={() => {
              setSelectedStop(stop.id);
            }}
            walkId={walkId}
          />
        ))}
      </div>
    </div>
  );
};

export default Walk;

/**
 * 

import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { Box } from './Box';
import update from 'immutability-helper';
const styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
export const Container = ({ hideSourceOnDrag }) => {
    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    });
    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes, setBoxes]);
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        },
    }), [moveBox]);
    return (<div ref={drop} style={styles}>
			{Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (<Box key={key} id={key} left={left} top={top} hideSourceOnDrag={hideSourceOnDrag}>
						{title}
					</Box>);
    })}
		</div>);
};

 * 
 * 
 */
