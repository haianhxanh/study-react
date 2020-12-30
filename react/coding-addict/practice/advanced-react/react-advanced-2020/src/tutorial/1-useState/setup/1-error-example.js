import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <>
      <hr />
      <h2>1) useState error example</h2>
      <p>
        This example showcases when useState() is not used, hence when we click
        on the button the value of the title will change but only in console and
        it does not replace the original title
      </p>
      <h3>{title}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
