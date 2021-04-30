import React from "react";

const SelectedStop = ({ stop, setSelectedStop, currentWalk }) => {
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
    <div>
      <h2>Selected stop:</h2>
      <p>
        <strong>Name: </strong>{" "}
        {stop.title || `Stop ${currentWalk.stops.indexOf(stop) + 1}`}
      </p>
      {stop.text ? (
        <p>
          <strong>Text:</strong> {stop.text}
        </p>
      ) : null}
      {/*<p>{JSON.stringify(stop)}</p>*/}
      {previousStop.map((prevStop, index) => (
        <button
          key={index}
          onClick={() => {
            setSelectedStop(prevStop);
          }}
        >
          « Previous stop{previousStop.length > 1 ? ` ${index + 1}` : ""}
        </button>
      ))}
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
