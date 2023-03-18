import React, { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button type="button" className="btn" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default UseStateBasics;
