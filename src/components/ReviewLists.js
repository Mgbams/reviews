import React from "react";
import SingleReview from "./SingleReview";

const reviewLists = () => {
  const prevSlide = () => {
    console.log("previous slide");
  };

  const nextSlide = () => {
    console.log("next slide");
  };
  return (
    <div>
      <h1 className="text-center">Our Reviews</h1>
      <div className="hr"></div>
      <SingleReview prevSlide={prevSlide} nextSlide={nextSlide} />
    </div>
  );
};

export default reviewLists;
