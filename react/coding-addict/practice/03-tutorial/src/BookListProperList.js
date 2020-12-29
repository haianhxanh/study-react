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

function BookListProperList() {
  return (
    <>
      <h2>Mini Book Project - Working with data - Proper List</h2>
      <section className="booklist">
        {books.map((b) => {
          const { img, title, author } = b;

          // return (
          //   <div>
          //     <h4>{title}</h4>
          //     <small>{author}</small>
          //   </div>
          // );

          return <Book book={b}></Book>;
        })}
      </section>
    </>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

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

export default BookListProperList;
