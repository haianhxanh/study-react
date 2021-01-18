import React, { useState } from "react";
import ShortCircuit2 from "./2b-short-circuit";
import ShortCircuit3 from "./2c-short-circuit";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // JS RULES
  // or operator || says that if the first value is correct, return that first value, if the first value is falsy (empty is perceived as falsey) then return second value
  const firstValue = text || "hello world";
  // and operator && requires first value to be truth and it will display second value, else nothing is returned
  const secondValue = text && "hello world";

  return (
    <>
      <hr />
      <h2>3.2a) short circuit</h2>

      <h4>a) Conditional rendering using variable</h4>
      <h3>{firstValue}</h3>
      <h3>value: {secondValue}</h3>

      <h4>b) Conditional rendering using operators</h4>
      <p>
        This is for the case when I want to set a default value when my text is
        empty
      </p>
      <p>case 1: || operator</p>
      <h3>{text || "John Doe"}</h3>

      <p>case 2: && operator</p>
      {text && <h3>hello world when text is true</h3>}
      {!text && <h3>hello world when text is false</h3>}

      <ShortCircuit2 />

      <ShortCircuit3 />
    </>
  );
};

export default ShortCircuit;
