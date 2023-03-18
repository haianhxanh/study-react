import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  // destructure only after getting back data
  const { avatar_url, name, company, bio } = user;

  return (
    <>
      <h2>Fetch Data </h2>
      <img style={{ width: "100px" }} src={avatar_url} alt={name} />
      <div>{name}</div>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
