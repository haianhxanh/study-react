import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        click
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {};

    window.addEventListener("scroll", someFunc);

    // cleanup function
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
