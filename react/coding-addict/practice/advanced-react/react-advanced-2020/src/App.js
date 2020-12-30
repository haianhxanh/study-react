import React from "react";
import ErrorExampleSetup from "./tutorial/1-useState/setup/1-error-example";
import UseStateBasicsSetup from "./tutorial/1-useState/setup/2-useState-basics";
import UseStateArraySetup from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObjectSetup from "./tutorial/1-useState/setup/4-useState-object";

function App() {
  return (
    <div className="container">
      <h2>Advanced Tutorial</h2>
      <ErrorExampleSetup />
      <UseStateBasicsSetup />
      <UseStateArraySetup />
      <UseStateObjectSetup />
    </div>
  );
}

export default App;
