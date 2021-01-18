import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit2 = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>3.2b) short circuit - toggling error button</h2>

      {/* here by setting !isError I create a toggle function, because we always setIsError to the opposite value that it currently holds */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* by toggling the state we also toggle the value to be displayed */}
      {isError && <h3>Error...</h3>}
    </>
  );
};

export default ShortCircuit2;
