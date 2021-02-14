import { useState, useEffect } from "react";

// creating my custom hook for fetching data
export const useFetch = (url) => {
  // pass in the "url" from useEffect()
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products }; // return loading and products if we want to use them later on in components
};
