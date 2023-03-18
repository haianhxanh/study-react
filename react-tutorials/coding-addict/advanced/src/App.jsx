import UseStateStarter from "./tutorial/01-useState/starter/02-useState-basics";
import UseStateArray from "./tutorial/01-useState/starter/03-useState-array";
import UseStateObject from "./tutorial/01-useState/starter/04-useState-object";
import UseStateGotcha from "./tutorial/01-useState/starter/05-useState-gotcha";
// import CodeExample from "./tutorial/02-useEffect/starter/01-code-example";
import UseEffectBasics from "./tutorial/02-useEffect/starter/02-useEffect-basics";
import MultipleEffects from "./tutorial/02-useEffect/starter/03-multiple-effects";
import FetchData from "./tutorial/02-useEffect/starter/04-fetch-data";

function App() {
  return (
    <div className="container">
      <UseStateStarter />
      <UseStateArray />
      <UseStateObject />
      <UseStateGotcha />
      {/* <CodeExample /> */}
      <UseEffectBasics />
      <MultipleEffects />
      <FetchData />
    </div>
  );
}

export default App;
