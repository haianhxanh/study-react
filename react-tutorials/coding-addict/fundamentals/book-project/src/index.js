import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg",
    title: "Let That Sh*t Go",
    author: "Monica Sweeney",
    id: 1,
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51VkB7O0v4L._AC_UL200_SR200,200_.jpg",
    title: "Good Days Start With Gratitude",
    author: "Pretty Simple Press",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id == id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { id, img, title, author, getBook } = props;

  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/*  */}
      {/* <button onClick={getSingleBook}>Click me</button> */}
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
