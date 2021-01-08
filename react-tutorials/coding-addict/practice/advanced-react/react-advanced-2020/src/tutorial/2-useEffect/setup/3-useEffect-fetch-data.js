import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // !!! be careful, this will cause infinite loop because we are updating useState() and it re-renders after every update, at the same time we invoke getUsers() that runs setUsers() inside, hence it is an infinite loop - to prevent this, we always have to add "second argument to useEffect() below"
    const users = data.slice(0, 4);
    setUsers(users);
    // console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []); // never forget "second argument" to prevent infinite loop

  return (
    <>
      <hr />
      <h2>fetch data</h2>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
