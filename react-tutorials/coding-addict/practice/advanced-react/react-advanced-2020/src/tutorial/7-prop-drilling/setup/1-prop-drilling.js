import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  // we want to pass this function down to the last child of component tree, we will HAVE to pass it to all components in between
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <hr />
      <h2>7) prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

// the List receives removePerson() as a prop but it does not use the function
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person} // this means I'm passing down whatever the person has (id, name etc.) so in the child component I will be able to access those properties rightaway
            // even though the List does not use the removePerson(), it is passing the function down to the last component
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
