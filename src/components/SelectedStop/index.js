import React from "react";
import { SelectedStopDiv } from "./elements";

const SelectedStop = ({
  stop,
  setSelectedStop,
  setPresentationMode,
  currentWalk,
  isBottom,
}) => {
  const getPreviousStop = (id) => {
    const previousStops = [];
    for (let i = 0; i < currentWalk.stops.length; i++) {
      if (
        currentWalk.stops[i].nextStop &&
        currentWalk.stops[i].nextStop.length
      ) {
        if (currentWalk.stops[i].nextStop.indexOf(id) > -1) {
          previousStops[previousStops.length] = currentWalk.stops[i].id;
        }
      }
    }
    return previousStops;
  };

  const previousStop = getPreviousStop(stop.id);
  return (
    <SelectedStopDiv className={isBottom ? "horizontal" : ""}>
      {!isBottom ? <h2>Selected stop:</h2> : null}
      {isBottom
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
      <div>
        <p>
          <strong className="verticalonly">Name: </strong>{" "}
          {stop.title || `Stop ${currentWalk.stops.indexOf(stop) + 1}`}
        </p>
        {!isBottom ? (
          <React.Fragment>
            <button
              onClick={() => {
                setPresentationMode(true);
              }}
            >
              Presentation mode
            </button>
            <hr />
          </React.Fragment>
        ) : null}
        {stop.text ? <p className="verticalonly">{stop.text}</p> : null}
      </div>
      {/*<p>{JSON.stringify(stop)}</p>*/}
      {!isBottom
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
    </SelectedStopDiv>
  );
};

export default SelectedStop;
