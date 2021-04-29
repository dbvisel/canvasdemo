import React from "react";
import walkData from "./../../assets/walkData";

const getPreviousStop = (id) => {
  const previousStops = [];
  for (let i = 0; i < walkData.stops.length; i++) {
    if (walkData.stops[i].nextStop && walkData.stops[i].nextStop.length) {
      if (walkData.stops[i].nextStop.indexOf(id) > -1) {
        previousStops[previousStops.length] = walkData.stops[i].id;
      }
    }
  }
  return previousStops;
};

const SelectedStop = ({ stop, setSelectedStop }) => {
  const previousStop = getPreviousStop(stop.id);
  console.log(previousStop);
  return (
    <div>
      <h2>Selected stop:</h2>
      <p>{JSON.stringify(stop)}</p>
      {previousStop && previousStop.length
        ? previousStop.map((prevStop, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedStop(prevStop);
              }}
            >
              « Previous stop{previousStop.length > 1 ? ` ${index + 1}` : ""}
            </button>
          ))
        : null}
      {stop.nextStop && stop.nextStop.length
        ? stop.nextStop.map((nextStop, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedStop(nextStop);
              }}
            >
              Next stop{stop.nextStop.length > 1 ? ` ${index + 1}` : ""}
              {" »"}
            </button>
          ))
        : null}
    </div>
  );
};

export default SelectedStop;
