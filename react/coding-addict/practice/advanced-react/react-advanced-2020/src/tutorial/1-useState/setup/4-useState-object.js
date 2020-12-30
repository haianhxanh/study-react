import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  // 2nd method: set up state values for each items in the object using handler
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // 1st method: dealing with object
    // we use spread operator (...person) to preserve the default values and only change the value of message
    // setPerson({ ...person, message: "hello world" });

    // 2nd method: dealing with state value
    setMessage("hello world");
  };
  return (
    <>
      <hr />
      <h2>4) useState object example</h2>
      {/* 1st method: dealing with object */}
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}

      {/* 2nd method: dealing state value */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
