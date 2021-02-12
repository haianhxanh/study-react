import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // my data is an array, by default I want to showcase the first value, hence 0
  const [index, setIndex] = useState(0);

  // pass in people[] the index so it is not hard-coded, whenever index changes another person will be displayed dynamically
  const { name, job, image, text } = people[index];

  // check to make sure we don't run into an error when we click on nextPerson while there is noone else, or when we click on prevPerson when displaying the first person while there is noone else
  const checkNumber = (number) => {
    // if number is bigger than last item in the array, return the first item in the array
    if (number > people.length - 1) {
      return 0;
    }
    // if number is less than 0 return the last item in the array
    if (number < 0) {
      return people.length - 1;
    }
    // if number is neither the above
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // pass newIndex into function checkNumber()
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // avoid number repetition, which happens with Math.floor()
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
    // console.log(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
