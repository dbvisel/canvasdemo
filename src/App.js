import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Walk from "./components/Walk";
import SelectedStop from "./components/SelectedStop";
import walkData from "./assets/walkData";
import { PresentationStop } from "./components/Stop";

const App = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  const [currentWalk, setCurrentWalk] = React.useState(walkData.walks[0]);
  const [presentationMode, setPresentationMode] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const canvas = React.useRef();

  const myStartPoints = currentWalk.stops.filter((x) => x.isStartPoint);

  React.useEffect(() => {
    if (presentationMode && selectedStop === "") {
      console.log("No stop selected!");
      // console.log(currentWalk.stops[0].id);
      setSelectedStop(currentWalk.stops[0].id);
    }
  }, [presentationMode, selectedStop, currentWalk.stops]);

  React.useEffect(() => {
    if (selectedStop && !presentationMode) {
      const canvasPosition = canvas.current.getBoundingClientRect();
      const thisStop = canvas.current.querySelector(`#${selectedStop}`);
      const thisStopPosition = thisStop.getBoundingClientRect();

      const deltaX = thisStopPosition.x - canvasPosition.x - 10;
      const deltaY = thisStopPosition.y - canvasPosition.y - 10;
      console.log(canvasPosition, thisStopPosition, deltaX, deltaY);

      canvas.current.scrollTo({
        top: deltaY,
        left: deltaX,
        behavior: "smooth",
      });
    }
  }, [selectedStop, presentationMode]);

  // console.log(`Selected stop: "${selectedStop}"`);

  return (
    <Layout>
      <Header
        title={currentWalk.title}
        presentationMode={presentationMode}
        setPresentationMode={setPresentationMode}
      />
      {presentationMode && selectedStop ? (
        <div id="presentationmode">
          <div>
            <PresentationStop
              stopData={
                currentWalk.stops.filter((x) => x.id === selectedStop)[0]
              }
            />
          </div>
          <nav>
            <SelectedStop
              isBottom
              currentWalk={currentWalk}
              stop={currentWalk.stops.filter((x) => x.id === selectedStop)[0]}
              setSelectedStop={setSelectedStop}
            />
          </nav>
        </div>
      ) : (
        <div key={currentWalk.id} id="walkmode">
          <nav>
            <div>
              <h2>Choose a walk:</h2>
              <select
                selected={currentWalk.id} /* This is working poorly! */
                onChange={(e) => {
                  e.preventDefault();
                  // console.log(`Changing to ${e.target.value}`);
                  setCurrentWalk(
                    walkData.walks.filter((x) => x.id === e.target.value)[0]
                  );
                  setSelectedStop("");
                  setFlag(() => !flag);
                }}
              >
                {walkData.walks.map((walk) => (
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
              key={
                flag ? `dummy_${currentWalk.id}` : `dummy2_${currentWalk.id}`
              }
              onClick={(e) => {
                e.preventDefault();
                setSelectedStop("");
              }}
            >
              <Walk
                stops={currentWalk.stops}
                selectedStop={selectedStop}
                setSelectedStop={setSelectedStop}
              />
            </main>
          </DndProvider>
        </div>
      )}
    </Layout>
  );
};

export default App;
