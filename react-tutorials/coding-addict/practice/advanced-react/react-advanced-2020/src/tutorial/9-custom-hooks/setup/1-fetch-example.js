import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch"; // import custom hook

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  // import my custom hook
  const { loading, products } = useFetch(url);

  console.log(products);
  return (
    <>
      <hr />
      <h2>9) custom hooks</h2>
      <div>
        <h2>{loading ? "loading..." : "data"}</h2>
      </div>
    </>
  );
};

export default Example;
