import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>short circuit - examples</h2>
      <h4>{text || "default value"}</h4>
      <h4>{name || "default value"}</h4>

      {/* combined with Component */}
      {/* {user && <SomeComponent name={user.name} />} */}

      <h2>ternary operators</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
    </>
  );
};

export default ShortCircuitExamples;
