import UseStateStarter from "./tutorial/01-useState/starter/02-useState-basics";
import UseStateArray from "./tutorial/01-useState/starter/03-useState-array";
import UseStateObject from "./tutorial/01-useState/starter/04-useState-object";
import UseStateGotcha from "./tutorial/01-useState/starter/05-useState-gotcha";
// import CodeExample from "./tutorial/02-useEffect/starter/01-code-example";
import UseEffectBasics from "./tutorial/02-useEffect/starter/02-useEffect-basics";
import MultipleEffects from "./tutorial/02-useEffect/starter/03-multiple-effects";
import FetchData from "./tutorial/02-useEffect/starter/04-fetch-data";
import MultipleReturns from "./tutorial/03-conditional-rendering/starter/01-multiple-returns-basics";
import MultipleReturnsFetchData from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data";
import ShortCircuitOverview from "./tutorial/03-conditional-rendering/starter/04-short-circuit-overview";
import ShortCircuitExamples from "./tutorial/03-conditional-rendering/starter/05-short-circuit-examples";
import ToggleChallenge from "./tutorial/03-conditional-rendering/starter/06-toggle-challenge";

function App() {
  return (
    <div className="container">
      {/* <UseStateStarter />
      <UseStateArray />
      <UseStateObject />
      <UseStateGotcha />
      <CodeExample />
      <UseEffectBasics />
      <MultipleEffects />
      <FetchData />
      <MultipleReturns /> 
      <MultipleReturnsFetchData /> */}
      <ShortCircuitOverview />
      <ShortCircuitExamples />
      <ToggleChallenge />
    </div>
  );
}

export default App;
