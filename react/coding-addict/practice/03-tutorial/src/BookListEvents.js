import React from "react";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg",
    title: "Let That Sh*t Go",
    author: "Monica Sweeney",
  },

  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51VkB7O0v4L._AC_UL200_SR200,200_.jpg",
    title: "Good Days Start With Gratitude",
    author: "Pretty Simple Press",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg",
    title: "The Deep End",
    author: "Jeff Kinney",
  },
];

function BookListEvents() {
  return (
    <>
      <h2>Mini Book Project - Events Basics</h2>
      <section className="booklist">
        {books.map((b) => {
          return <Book key={b.id} {...b}></Book>;
        })}
      </section>
    </>
  );
}

const Book = ({ img, title, author }) => {
  // a) reference function
  const clickHandler = (e) => {
    console.log(e.target);
    // alert("hello Hai Anh");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <div>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <small>{author}</small>

        {/* 1) set up attribute */}
        {/* a) reference function */}
        <button type="button" onClick={clickHandler}>
          reference example
        </button>

        {/* b) inline function */}
        {/* <button
          type="button"
          onClick={() => {
            alert("hello again");
          }}
        >
          reference example 2
        </button> */}

        <button type="button" onClick={() => complexExample(author)}>
          more complex example
        </button>
      </div>
    </article>
  );
};

export default BookListEvents;
