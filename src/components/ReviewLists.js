import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";
import data from "../data";

const ReviewLists = () => {
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState(data[index]);

  //display the previous data when the previous button is pressed
  const prevSlide = () => {
    if (index != 0) {
      setIndex((index) => index - 1);
      setReviews(data[index]);
    } else if (index <= 0) {
      setIndex(data.length - 1);
      setReviews(data[data.length - 1]);
    }
  };

  //display nex data when the next button is clicked
  const nextSlide = () => {
    if (index < data.length) {
      setIndex((index) => index + 1);
      setReviews(data[index]);
    } else if (index > data.length - 1) {
      setIndex(0);
      setReviews(data[0]);
    }
  };

  //Randomly display reviews when the random button is clicked
  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    //console.log(randomIndex);
    if (randomIndex == index && index < data.length - 1) {
      randomIndex = randomIndex + 1;
      setIndex(randomIndex);
      setReviews(data[randomIndex]);
    } else {
      setIndex(randomIndex);
      setReviews(data[randomIndex]);
    }
  };

  return (
    <div>
      <h1 className="text-center">Our Reviews</h1>
      <div className="hr"></div>
      <SingleReview
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        reviews={reviews}
        randomReview={randomReview}
      />
    </div>
  );
};

export default ReviewLists;
