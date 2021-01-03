import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // conditions must be placed inside of hooks
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  return (
    <>
      <h4>b) second parameter</h4>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
