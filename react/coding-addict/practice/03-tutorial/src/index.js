import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <>
      <Person />
      <h4 className="">This is Hai Anh and this is my first component</h4>
    </>
  );
}

const Person = () => {
  return <h2>Hai Anh</h2>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
