import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Walk from "./components/Walk";
import SelectedStop from "./components/SelectedStop";
import walkData from "./assets/walkData";

const App = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  const [currentWalk, setCurrentWalk] = React.useState(walkData.walks[0]);

  const myStartPoints = currentWalk.stops.filter((x) => x.isStartPoint);

  return (
    <Layout>
      <Header title={currentWalk.title} />
      <div key={currentWalk.id}>
        <nav>
          <div>
            <h2>Choose a walk:</h2>
            <select
              onBlur={(e) => {
                e.preventDefault();
                setCurrentWalk(
                  walkData.walks.filter((x) => x.id === e.target.value)[0]
                );
                setSelectedStop("");
              }}
            >
              {walkData.walks.map((walk, index) => (
                <option key={`walk_${index}`} value={walk.id}>
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
    </Layout>
  );
};

export default App;
