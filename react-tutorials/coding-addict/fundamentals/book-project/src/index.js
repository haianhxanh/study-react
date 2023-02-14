import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} index={index + 1} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
