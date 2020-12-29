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

function BookListProperList() {
  return (
    <>
      <h2>Mini Book Project - Working with data - Proper List</h2>
      <section className="booklist">
        {books.map((b) => {
          // the name in the parameter refers to 1 object in the array books
          // const { img, title, author } = b;

          // return() will always give me the number of items inside the array

          // 1st way, I can return rightaway the object, but since we know we have a Component, then we want to return a Book Component
          // return (
          //   <div>
          //     <img src={img} alt="" />
          //     <h4>{title}</h4>
          //     <small>{author}</small>
          //   </div>
          // );

          // 2nd way, since we know we have a Component, then we want to return a Book Component

          // Method A) pass the object as a prop to the Component
          // return <Book key={b.id} bookie={b}></Book>;

          // Method B) spread operator
          // spread out all properties coming from the "b" on my props--> meaning I'm passing separate properties, not an object anymore
          return <Book key={b.id} {...b}></Book>;
        })}
      </section>
    </>
  );
}

const Book = (props) => {
  //  Method A) pass the object as a prop to the Component
  // const { img, title, author } = props.bookie;

  // Method B) spread operator --> here we can destructure the items of array inside of parenthesis Book = ()
  const { img, title, author } = props;

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
