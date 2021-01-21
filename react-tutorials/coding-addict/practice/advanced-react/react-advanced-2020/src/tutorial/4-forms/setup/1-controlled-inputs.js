import React, { useState } from "react";
import ControlledInputsAddingItems from "./1b-controlled-inputs-adding-items";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // we need to pass in a parameter that refers to the event we want to handle
    e.preventDefault();
    console.log(firstName, email);
  };
  return (
    <>
      <hr />
      <h2>4.1) controlled inputs</h2>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // refrencing the state value
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">add person</button>
        </form>
      </article>

      <ControlledInputsAddingItems />
    </>
  );
};

export default ControlledInputs;
