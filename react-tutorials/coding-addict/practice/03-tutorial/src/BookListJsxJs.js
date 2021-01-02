import React from "react";

function BookListJsxJs() {
  return (
    <>
      <h2>Mini Book Project - JSX JavaScript</h2>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
}

const Book = () => {
  const title = "If Animals Kissed Good Night";
  const author = "Ann Whitford Paul";
  const img =
    "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg";

  return (
    <article className="book">
      <div>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <small>{author.toUpperCase()}</small>
      </div>
    </article>
  );
};

export default BookListJsxJs;
