import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PresentationMode from "./components/PresentationMode";
import WalkMode from "./components/WalkMode";
import AnnotationPopUp from "./components/AnnotationPopUp";
import walkData from "./assets/walkData";

const App = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  const [currentWalk, setCurrentWalk] = React.useState(walkData.walks[0]);
  const [presentationMode, setPresentationMode] = React.useState(false);
  const [annotationShown, setAnnotationShown] = React.useState(false);
  const [annotationId, setAnnotationId] = React.useState(walkData.walks[0].id);

  React.useEffect(() => {
    if (selectedStop) {
      setAnnotationId(currentWalk.id + "-" + selectedStop);
    } else {
      setAnnotationId(currentWalk.id);
    }
  }, [selectedStop, currentWalk.id]);

  return (
    <Layout>
      <Header
        title={currentWalk.title || ""}
        id={currentWalk.id}
        presentationMode={presentationMode}
        setPresentationMode={setPresentationMode}
        setAnnotationShown={() => {
          setAnnotationId(currentWalk.id);
          setAnnotationShown(true);
        }}
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
          showAnnotation={(x) => {
            setAnnotationId(currentWalk.id + "-" + x);
            setAnnotationShown(true);
          }}
        />
      )}
      <AnnotationPopUp
        id={annotationId}
        visible={annotationShown}
        closeAnnotation={() => {
          setAnnotationShown(false);
        }}
      />
    </Layout>
  );
};

export default App;
