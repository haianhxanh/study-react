import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns2 = () => {
  // if we set loading to "true" we will see Loading... heading instead of the one below
  const [isLoading, setIsLoading] = useState(false);
  // in case of boolean we name it as isSomething
  const [isError, setIsError] = useState(false);
  // checking for one user, if it exists, then we will display it
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => {
        // checking for status of my URL
        // HTTP response codes 200 – 299 are bearers of good news: the request has been accepted, a new request has been created, or a certain problem was solved.
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          // in case the URL is not correct, we will get a 404 error
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
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
        <h2>
          3.1a) Conditional rendering - multiple returns: Example with error
        </h2>
        <h3>Error...</h3>
        <p>Here the URL is not correct (redundant s at the end)</p>
      </>
    );
  }

  // if there is no error, no loading, I'd like to display my user
  return (
    <>
      <hr />
      <h2>
        3.1) Conditional rendering - multiple returns: Example with correct URL
      </h2>
      <p>The URL is correct thus we see the data</p>
      <h3>{user}</h3>
    </>
  );
};

export default MultipleReturns2;
