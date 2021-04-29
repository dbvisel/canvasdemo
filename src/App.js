import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Walk from "./components/Walk";
import walkData from "./assets/walkData";

const App = () => {
  return (
    <Layout>
      <Header title={walkData.title} />
      <div>
        <nav>Nav goes here.</nav>
        <main>
          <Walk stops={walkData.stops} />
        </main>
      </div>
    </Layout>
  );
};

export default App;
