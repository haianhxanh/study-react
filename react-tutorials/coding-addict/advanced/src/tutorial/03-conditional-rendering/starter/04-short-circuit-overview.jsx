import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // falsy
  const [name, setName] = useState("Susan");

  return (
    <>
      <h2>short circuit overview</h2>
      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy AND : {text && "hello world"}</h4>
      <h4>Truthy OR : {name || "hello world"}</h4>
      <h4>Truthy AND : {name && "hello world"}</h4>
    </>
  );
};
export default ShortCircuitOverview;
