import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Walk from "./../Walk";
import SelectedStop from "./../SelectedStop";
import { WalkModeWrapper } from "./elements";

const WalkMode = ({
  currentWalk,
  setCurrentWalk,
  selectedStop,
  setSelectedStop,
  walks,
  showAnnotation,
}) => {
  const [flag, setFlag] = React.useState(false);
  const canvas = React.useRef();
  const myStartPoints = currentWalk.stops.filter((x) => x.isStartPoint);

  React.useEffect(() => {
    if (selectedStop && canvas.current) {
      const canvasPosition = canvas.current.getBoundingClientRect();
      const thisStop = canvas.current.querySelector(`#${selectedStop}`);
      if (thisStop) {
        const thisStopPosition = thisStop.getBoundingClientRect();

        const deltaX = thisStopPosition.x - canvasPosition.x - 10;
        const deltaY = thisStopPosition.y - canvasPosition.y - 10;
        // console.log(canvasPosition, thisStopPosition, deltaX, deltaY);

        canvas.current.scrollTo({
          top: deltaY,
          left: deltaX,
          behavior: "smooth",
        });
      }
    }
  }, [selectedStop]);

  return (
    <WalkModeWrapper key={currentWalk.id} id="walkmode">
      <nav>
        <div>
          <h2>Choose a walk:</h2>
          <select
            selected={currentWalk.id} /* This is working poorly! */
            onChange={(e) => {
              e.preventDefault();
              // console.log(`Changing to ${e.target.value}`);
              setCurrentWalk(walks.filter((x) => x.id === e.target.value)[0]);
              setSelectedStop("");
              setFlag(() => !flag);
            }}
          >
            {walks.map((walk) => (
              <option key={walk.id} name={walk.id} value={walk.id}>
                {walk.title}
              </option>
            ))}
          </select>
        </div>
        {myStartPoints ? (
          <div>
            <h2>Go to start:</h2>
            {myStartPoints.map((startpoint, index) => (
              <button
                key={`startpoint_${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedStop(startpoint.id);
                }}
              >
                {startpoint.title
                  ? startpoint.title
                  : myStartPoints.length > 1
                  ? `Start point ${index + 1}`
                  : "Start point"}
              </button>
            ))}
          </div>
        ) : null}
        {selectedStop ? (
          <SelectedStop
            currentWalk={currentWalk}
            stop={currentWalk.stops.filter((x) => x.id === selectedStop)[0]}
            setSelectedStop={setSelectedStop}
          />
        ) : null}
      </nav>
      <DndProvider backend={HTML5Backend}>
        <main
          ref={canvas}
          key={flag ? `dummy_${currentWalk.id}` : `dummy2_${currentWalk.id}`}
          onClick={(e) => {
            e.preventDefault();
            setSelectedStop("");
          }}
        >
          <Walk
            stops={currentWalk.stops}
            selectedStop={selectedStop}
            setSelectedStop={setSelectedStop}
            showAnnotation={showAnnotation}
          />
        </main>
      </DndProvider>
    </WalkModeWrapper>
  );
};

export default WalkMode;
