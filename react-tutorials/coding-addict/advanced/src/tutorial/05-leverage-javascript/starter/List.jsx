import React from "react";
import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h2>Leverage JavaScript</h2>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
};

export default List;
