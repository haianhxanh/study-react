import React from "react";
import ReactDom from "react-dom";
import BookList from "./BookList.js";
import BookListJsxJs from "./BookListJsxJs.js";
import BookListProps from "./BookListProps.js";
import BookListPropsDestructuring from "./BookListPropsDestructuring.js";
import BookListPropsChildren from "./BookListPropsChildren.js";
import BookListSimpleList from "./BookListSimpleList.js";
import BookListProperList from "./BookListProperList.js";
import "./index.css";

function Greeting() {
  return (
    <>
      <h2>Component demo</h2>
      <Person />
      <Message />
      <q className="">This is Hai Anh and this is my first component</q>

      <hr />
      <BookList />

      <hr />
      <BookListJsxJs />

      <hr />
      <BookListProps />

      <hr />
      <BookListPropsDestructuring />

      <hr />
      <BookListPropsChildren />

      <hr />
      <BookListSimpleList />

      <hr />
      <BookListProperList />
    </>
  );
}

const Person = () => {
  return <h3>Hai Anh</h3>;
};

const Message = () => {
  return <h3>This is my message</h3>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
