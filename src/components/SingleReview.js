import React from "react";
import PropTypes from "prop-types";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const SingleReview = ({ prevSlide, nextSlide, reviews, randomReview }) => {
  const { id, name, job, image, text } = reviews;
  return (
    <div
      className="card mb-3"
      style={{
        width: "38rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          className="card-img rounded-circle mt-4"
          src={image}
          alt={name}
          style={{ width: "150px", height: "150px", position: "relative" }}
        />
        <FaQuoteRight id="quote-marks" className="icon-slide" />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">
          <strong>{name}</strong>
        </h5>
        <h5 className="job text-center job">{job}</h5>
        <p className="card-text text-center">{text}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={prevSlide} className="btn">
            {" "}
            <FaChevronLeft className="icon-slide" />
          </button>
          <button onClick={nextSlide} className="btn">
            {" "}
            <FaChevronRight className="icon-slide" />
          </button>
        </div>
        <p className="surprise-me text-center mt-3">
          <button className="surprise-me-btn px-2" onClick={randomReview}>
            Surprise Me
          </button>
        </p>
      </div>
    </div>
  );
};

SingleReview.propTypes = {};

export default SingleReview;
