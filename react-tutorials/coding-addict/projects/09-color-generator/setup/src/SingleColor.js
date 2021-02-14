import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false); // alert to let users know color value has been copied to clipboard
  const bcg = rgb.join(",");
  // display hex values on each color item
  // 1st way - use function
  // --- function rgbToHex() is imported from utils.js
  // --- const hexColor = rgbToHex(...rgb);
  // 2nd way - use hex value provided by library by passing down the prop hexColor from App.js

  // add # to the front of hexColor
  const hexValue = `#${hexColor}`;

  // set the alert "copied to clipboard" to last for 3 seconds and then disappear
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout); // clear the function
  }, [alert]); // watching for alert, once alert changes I want to set the timeout())

  return (
    // in case index is bigger than 10 (dark colors) I want to text inside of color box to be light and visible
    <article
      className={`color ${index > 7 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // copy function that copies the target to clipboard
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
