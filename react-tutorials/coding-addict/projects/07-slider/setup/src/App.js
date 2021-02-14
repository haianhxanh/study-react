import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  // index that will change everytime we click on the button next or prev
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    // if I am on the first index and a user click on prev button, clearly my index is going to run into negative, in this case, I want to switch my index to the last one -> to display the last item of my array
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]); // runs everytime we have a change in index or people

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    // cleanup function to prevent useEffect() run everytime I click button
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // adding CSS class
          let position = "nextSlide"; // by default

          // if the personIndex matches the current index, the CSS class will be "activeSlide"
          if (personIndex === index) {
            position = "activeSlide";
          }

          // check for when index is less than 0 which does not exists
          // and check for when index is the first one and last one
          // in both cases we want the CSS to be lastSlide
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>

        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
