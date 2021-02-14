import React, { useState } from "react";
import SingleColor from "./SingleColor";

// importing from external library
import Values from "values.js";

function App() {
  const [color, setColor] = useState([]);
  const [error, setError] = useState(false); // error state prevents from generating colors when user passes in an incorrect value

  // all() generates tint and shades
  const [list, setList] = useState(new Values("#f15025").all(10));

  const [emptyColors, setEmptyColors] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // catch error in case user passes in an incorrect value
    try {
      // this is how we work with external library, pass new Values into a new variable
      let colors = new Values(color).all(10);
      setList(colors);
      setEmptyColors(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#"
            // if error exists, className will be error, border of input field will turn red
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <div>{`${error ? "please insert a correct value" : ""}`}</div>
      </section>

      {/* once colors display, we let users know they can copy the values
      by default if there are no colors, the text is not displayed */}
      <div>
        <p>{`${
          emptyColors ? "" : "Click on the color to copy to clipboard"
        }`}</p>
      </div>

      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
