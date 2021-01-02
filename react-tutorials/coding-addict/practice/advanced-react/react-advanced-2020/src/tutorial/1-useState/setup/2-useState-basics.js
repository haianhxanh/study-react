import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));

  // useState(default_value)[no. of value we want to access]
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // to invoke useState() we pass in default value as 1st parameter and function controlling that value as 2nd parameter
  // console.log(useState(value, handler));

  // array destructuring: [ name/state value, function/set the value ] = your_array
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <hr />
      <h2>1.2) useState basic example</h2>
      <p>This example showcases the simple functionality of useState()</p>
      <h3>{text}</h3>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
