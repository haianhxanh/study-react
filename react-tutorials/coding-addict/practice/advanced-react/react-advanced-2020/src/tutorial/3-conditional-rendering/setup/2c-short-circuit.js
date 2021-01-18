import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit3 = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>3.2c) short circuit - ternary operator</h2>

      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h3>There is no error</h3>
        </div>
      )}
    </>
  );
};

export default ShortCircuit3;
