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
  const [annotationTitle, setAnnotationTitle] = React.useState(
    walkData.walks[0].title
  );

  React.useEffect(() => {
    if (selectedStop) {
      const thisStop = currentWalk.stops.filter(
        (x) => x.id === selectedStop
      )[0];
      setAnnotationId(currentWalk.id + "-" + selectedStop);
      setAnnotationTitle(
        thisStop.title || `Stop ${currentWalk.stops.indexOf(thisStop) + 1}`
      );
    } else {
      setAnnotationId(currentWalk.id);
      setAnnotationTitle(currentWalk.title);
    }
  }, [selectedStop, currentWalk]);

  return (
    <Layout>
      <Header
        walks={walkData.walks}
        presentationMode={presentationMode}
        currentWalk={currentWalk}
        setCurrentWalk={setCurrentWalk}
        setPresentationMode={setPresentationMode}
        setSelectedStop={setSelectedStop}
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
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
          showAnnotation={(x) => {
            setAnnotationId(currentWalk.id + "-" + x);
            setAnnotationShown(true);
          }}
        />
      )}
      <AnnotationPopUp
        id={annotationId}
        annotationTitle={annotationTitle}
        visible={annotationShown}
        closeAnnotation={() => {
          setAnnotationShown(false);
        }}
      />
    </Layout>
  );
};

export default App;
