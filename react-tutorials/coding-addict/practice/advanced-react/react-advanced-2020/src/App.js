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
import ConditionalRenderingSetup from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
import ConditionalRendering2Setup from "./tutorial/3-conditional-rendering/setup/1b-multiple-returns";
import ShortCircuitSetup from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
import ShowHideSetup from "./tutorial/3-conditional-rendering/setup/3-show-hide";
import ControlledInputSetup from "./tutorial/4-forms/setup/1-controlled-inputs";
import MultipleInputSetup from "./tutorial/4-forms/setup/2-multiple-inputs";
import UseRefSetup from "./tutorial/5-useRef/setup/1-useRef-basics";
import UseReducerSetup from "./tutorial/6-useReducer/setup-withoutReducer/index";
import UseReducer2Setup from "./tutorial/6-useReducer/setup-withReducer/index";
import PropDrillingSetup from "./tutorial/7-prop-drilling/setup/1-prop-drilling";
import UseContextSetup from "./tutorial/8-useContext/setup/1-context-api";

function App() {
  return (
    <div className="container">
      <h2>Advanced Tutorial</h2>
      {/* <ErrorExampleSetup />
      <UseStateBasicsSetup />
      <UseStateArraySetup />
      <UseStateArrayFceSetup />
      <UseStateObjectSetup />
      <UseStateCounterSetup />
      <UseStateCounterFceUpdateFormSetup />
      <UseEffectBasicsSetup />
      <UseEffectCleanupSetup />
      <UseEffectFetchSetup /> */}
      {/* <ConditionalRenderingSetup />
      <ConditionalRendering2Setup />
      <ShortCircuitSetup />
      <ShowHideSetup /> */}
      <ControlledInputSetup />
      <MultipleInputSetup />
      <UseRefSetup />
      <UseReducerSetup />
      <UseReducer2Setup />
      <PropDrillingSetup />
      <UseContextSetup />
    </div>
  );
}

export default App;
