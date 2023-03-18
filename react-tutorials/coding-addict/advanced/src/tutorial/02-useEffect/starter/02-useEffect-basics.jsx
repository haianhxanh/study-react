import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("hello");
  }, []); // empty array dependency will make sure useEffect runs only once, not every render

  return (
    <div>
      <h2>useEffect basics</h2>
      <h3>value : {value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
