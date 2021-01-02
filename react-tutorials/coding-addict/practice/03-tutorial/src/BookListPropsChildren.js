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

function BookListPropsChildren() {
  return (
    <>
      <h2>Mini Book Project - Props & Children</h2>
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
          {/* Children props go in between the tags */}

          <p>
            From the author of bestselling journal Zen as F*ck, Monica Sweeney
            gives the gift of letting go with this journal for leaving your
            bullsh*t behind and creating a happy life.
          </p>
        </Book>

        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    </>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <div>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <small>{author}</small>
        {children}
      </div>
    </article>
  );
};

export default BookListPropsChildren;
