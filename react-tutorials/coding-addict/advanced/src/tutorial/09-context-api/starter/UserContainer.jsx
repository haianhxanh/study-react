import React, { useContext } from "react";
import Navbar, { NavbarContext, useAppContext } from "./Navbar";

const UserContainer = () => {
  // const { user, logout } = useContext(NavbarContext);
  const { user, logout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user.name}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default UserContainer;
