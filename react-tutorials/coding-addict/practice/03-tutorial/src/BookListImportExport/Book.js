import React from "react";

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

export default Book;
