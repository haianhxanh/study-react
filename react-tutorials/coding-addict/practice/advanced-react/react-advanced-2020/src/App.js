import React from "react";
import ErrorExampleSetup from "./tutorial/1-useState/setup/1-error-example";
import UseStateBasicsSetup from "./tutorial/1-useState/setup/2-useState-basics";
import UseStateArraySetup from "./tutorial/1-useState/setup/3-useState-array";
import UseStateArrayFceSetup from "./tutorial/1-useState/setup/3b-useState-array-fce";
import UseStateObjectSetup from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounterSetup from "./tutorial/1-useState/setup/5-useState-counter";
import UseStateCounterFceUpdateFormSetup from "./tutorial/1-useState/setup/5b-useState-counter-fce-update-form";
import UseEffectBasicsSetup from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectCleanupSetup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchSetup from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";

function App() {
  return (
    <div className="container">
      <h2>Advanced Tutorial</h2>
      <ErrorExampleSetup />
      <UseStateBasicsSetup />
      <UseStateArraySetup />
      <UseStateArrayFceSetup />
      <UseStateObjectSetup />
      <UseStateCounterSetup />
      <UseStateCounterFceUpdateFormSetup />
      <UseEffectBasicsSetup />
      <UseEffectCleanupSetup />
      <UseEffectFetchSetup />
    </div>
  );
}

export default App;
