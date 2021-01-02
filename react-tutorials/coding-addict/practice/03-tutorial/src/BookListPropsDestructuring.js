import React from "react";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg",
  title: "Let That Sh*t Go",
  author: "Monica Sweeney",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51VkB7O0v4L._AC_UL200_SR200,200_.jpg",
  title: "Good Days Start With Gratitude",
  author: "Pretty Simple Press",
};

function BookListPropsDestructuring() {
  return (
    <>
      <h2>Mini Book Project - Props Destructuring</h2>
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />

        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    </>
  );
}

const Book = ({ img, title, author }) => {
  // 1st method
  // creating an object with matching name of parameter
  // pass in the names of props - img, title, author
  // const {img, title, author} = props

  // 2nd method --> ({img, title, author})

  return (
    <article className="book">
      <div>
        {/* access props names in short */}
        <img src={img} alt="" />
        <h4>{title}</h4>
        <small>{author}</small>
      </div>
    </article>
  );
};

export default BookListPropsDestructuring;
