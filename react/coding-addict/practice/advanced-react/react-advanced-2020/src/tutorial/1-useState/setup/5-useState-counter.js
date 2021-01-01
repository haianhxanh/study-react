import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <hr />
      <h2>5) useState counter example</h2>
      <section style={{ margin: "2rem 0" }}>
        <h3>regular counter</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
