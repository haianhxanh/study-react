import React from "react";
import avatar from "../../../assets/default-avatar.svg";

const Person = ({ id, name, nickName, images }) => {
  // regular chaining
  // const img = images && images[0] && images[0].small && images[0].small.url;

  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "100px" }} />
      <h4>{name}</h4>
      <p>nickname: {nickName}</p>
    </div>
  );
};

export default Person;
