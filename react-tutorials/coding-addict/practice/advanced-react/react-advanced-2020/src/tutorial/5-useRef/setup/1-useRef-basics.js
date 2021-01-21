import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // 1. we invoke useRef by assigning it to a variable
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // we access the text field area and its value using refContainer
    // note that refContainer.current is pointing to the DOM element!
    console.log(refContainer.current.value);
  };
  // notice that refContainer is an object with key "current" and value "null" - set by default above
  console.log(refContainer);
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();

    // since useRef won't trigger re-render, we don't need to add dependency []
  });
  return (
    <>
      <hr />
      <h2>useRef - for uncontrolled inputs</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          {/* 2. we references refContainer to "ref" attribute */}
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
