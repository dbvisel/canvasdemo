import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Walk from "./components/Walk";
import SelectedStop from "./components/SelectedStop";
import walkData from "./assets/walkData";

const App = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  return (
    <Layout>
      <Header title={walkData.title} />
      <div>
        <nav>
          Nav goes here.
          {selectedStop ? (
            <SelectedStop
              stop={walkData.stops.filter((x) => x.id === selectedStop)[0]}
              setSelectedStop={setSelectedStop}
            />
          ) : null}
        </nav>
        <main
          onClick={(e) => {
            e.preventDefault();
            setSelectedStop("");
          }}
        >
          <Walk
            stops={walkData.stops}
            selectedStop={selectedStop}
            setSelectedStop={setSelectedStop}
          />
        </main>
      </div>
    </Layout>
  );
};

export default App;
