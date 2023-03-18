import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // useEffect(() => {
  //   console.log("hello from first useEffect");
  // }, []);

  // useEffect(() => {
  //   console.log("hello from second useEffect");
  // }, []);

  return (
    <div>
      <h2>Multiple Effects</h2>
      <h3>value : {value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h3>second value : {secondValue}</h3>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
