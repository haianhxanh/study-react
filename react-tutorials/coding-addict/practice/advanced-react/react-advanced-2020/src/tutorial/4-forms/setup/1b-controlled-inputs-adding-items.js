import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputsAddingItems = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // we need to pass in a parameter that refers to the event we want to handle
    e.preventDefault();
    // once the form is submitted, firstName and email will be part of array people
    // however, we want to set a condition that both of values "firstName" and "email" must be submitted, else the form fails to submit
    if (firstName && email) {
      // console.log("submit the form");

      // ES6 feature: if the name inside of the object matches the variable, we don't need to assign it to a new name anymore, in old ES it would be {firstName: firstName, email: email}
      // I'm creating also a new object value id that will be unique, in order for it to be unique we get the date & time
      const person = { id: new Date().getTime().toString(), firstName, email };
      // console.log(person);

      // add the person to [] of people
      setPeople((people) => {
        // passing person directly into [] of people by using spread operator => targeting whatever state of people is currently
        return [...people, person];
      });

      // set firstName and email back to an empty string so we can accept new values coming in
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <h2>4.1b) controlled inputs - adding items to a list</h2>
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

        {/* display the list of people */}
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputsAddingItems;
