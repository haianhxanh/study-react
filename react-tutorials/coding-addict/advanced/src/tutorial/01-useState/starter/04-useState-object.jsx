import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "hanka",
    age: 32,
    hobby: "snowboarding",
  });

  const displayPerson = () => {
    // setPerson({
    //   name: "hanka",
    //   age: 33,
    //   hobby: "more snowboarding",
    // });

    // change one value only
    setPerson({ ...person, name: "susan" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show
      </button>
    </>
  );
};

export default UseStateObject;
