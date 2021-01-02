import React from "react";

function BookList() {
  return (
    <>
      <h2>Mini Book Project</h2>
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
  return (
    <article className="book">
      <div>
        <Image />
        <Title />
        <Author />
      </div>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h4>I Love You to the Moon and Back</h4>;
};

const Author = () => {
  return <small>Amelia Hepworth</small>;
};

export default BookList;
