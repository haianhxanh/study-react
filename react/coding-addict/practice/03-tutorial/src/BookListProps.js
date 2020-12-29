import React from "react";

// const title = "Let That Sh*t Go";
// const author = "Monica Sweeney";
// const img = "https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg";

// creating an object to replace variables with values

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

function BookListProps() {
  return (
    <>
      <h2>Mini Book Project - Props</h2>
      <section className="booklist">
        {/* job = name of the props/property 
            "developer" = value of props 
        */}
        {/* <Book job="developer" /> */}
        {/* <Book title="random title" number={22} /> */}

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

// props = parameter we pass in, it can be anything but "props" is a convention
const Book = (props) => {
  // test out the parameter right before return()
  // console.log(props);
  return (
    <article className="book">
      <div>
        {/* <img src={img} alt="" />
        <h4>{title}</h4>
        <small>{author}</small> */}

        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <small>{props.author}</small>

        {/* <p>{props.job}</p>
        <p>{props.title}</p> */}
      </div>
    </article>
  );
};

export default BookListProps;
