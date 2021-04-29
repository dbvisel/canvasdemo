import React from "react";
import Stop from "./../Stop";

const Walk = ({ stops, selectedStop, setSelectedStop }) => {
  return (
    <React.Fragment>
      {stops.map((stop, index) => (
        <Stop
          key={stop.id}
          index={index}
          stopData={stop}
          selectedStop={selectedStop}
          selectThis={() => {
            setSelectedStop(stop.id);
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default Walk;
