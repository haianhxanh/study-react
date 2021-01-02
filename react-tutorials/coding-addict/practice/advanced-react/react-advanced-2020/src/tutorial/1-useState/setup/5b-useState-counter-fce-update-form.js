import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);

      // prevState grabs the old value right before update = current one
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <h2>
        1.5b) useState counter example - Complex counter - Functional update
        form
      </h2>
      <section style={{ margin: "2rem 0" }}>
        <h3>complex counter</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
