import { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
