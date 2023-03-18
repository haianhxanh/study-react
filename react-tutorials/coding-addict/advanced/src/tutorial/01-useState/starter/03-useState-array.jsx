import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    console.log(id);
    // return if the id doesn't match with input parameter, if it does, then remove from array
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAll = () => {
    setPeople([]); // set people as an empty array
  };
  return (
    <>
      <h2>2. useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={clearAll}>
        clear all
      </button>
    </>
  );
};

export default UseStateArray;
