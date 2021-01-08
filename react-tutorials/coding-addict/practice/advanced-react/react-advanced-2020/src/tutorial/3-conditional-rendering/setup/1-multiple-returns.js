import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  // if we set loading to "true" we will see Loading... heading instead of the one below
  const [isLoading, setIsLoading] = useState(false);
  // in case of boolean we name it as isSomething
  const [isError, setError] = useState(false);
  // checking for one user, if it exists, then we will display it
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      // at this point when I have my user, I will set loading to false
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <>
        <hr />
        <h2>3.1) Loading...</h2>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <hr />
        <h2>3.1) Error...</h2>
      </>
    );
  }

  // if there is no error, no loading, I'd like to display my user
  return (
    <>
      <hr />
      <h2>3.1) Conditional rendering - multiple returns</h2>
      <h3>{user}</h3>
    </>
  );
};

export default MultipleReturns;
