import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  // update the size
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // console.log("useEffect");
    // set event-listener on the window, that will listen to event called "resize" and invoke checkSize()
    // Side effect runs 3rd
    window.addEventListener("resize", checkSize);
    return () => {
      // Cleanup runs 2nd
      // console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  // Render runs 1st
  // console.log("render");

  return (
    <>
      <hr />
      <h2>2.2) useEffect cleanup</h2>
      <h3>window</h3>
      <h4>{size} PX</h4>
    </>
  );
};

export default UseEffectCleanup;
