import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    // function approach
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    }, 3000);
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
