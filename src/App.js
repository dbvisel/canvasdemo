import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PresentationMode from "./components/PresentationMode";
import WalkMode from "./components/WalkMode";

import walkData from "./assets/walkData";

const App = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  const [currentWalk, setCurrentWalk] = React.useState(walkData.walks[0]);
  const [presentationMode, setPresentationMode] = React.useState(false);

  return (
    <Layout>
      <Header
        title={currentWalk.title}
        presentationMode={presentationMode}
        setPresentationMode={setPresentationMode}
      />
      {presentationMode ? (
        <PresentationMode
          currentWalk={currentWalk}
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
        />
      ) : (
        <WalkMode
          currentWalk={currentWalk}
          setCurrentWalk={setCurrentWalk}
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
          walks={walkData.walks}
        />
      )}
    </Layout>
  );
};

export default App;
