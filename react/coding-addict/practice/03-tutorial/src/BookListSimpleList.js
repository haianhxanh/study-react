import React from "react";

const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg",
    title: "Let That Sh*t Go",
    author: "Monica Sweeney",
  },

  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51VkB7O0v4L._AC_UL200_SR200,200_.jpg",
    title: "Good Days Start With Gratitude",
    author: "Pretty Simple Press",
  },
];

const names = ["peter", "susan", "hannah"];

const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

function BookListSimpleList() {
  return (
    <>
      <h2>Mini Book Project - Working with data - Simple List</h2>
      <section className="booklist">{newNames}</section>
    </>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <div>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <small>{author}</small>
      </div>
    </article>
  );
};

export default BookListSimpleList;
