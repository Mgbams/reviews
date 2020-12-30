import React from "react";
import PropTypes from "prop-types";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const SingleReview = ({ prevSlide, nextSlide }) => {
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
          src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          alt="Card image cap"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
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
          <button className="surprise-me-btn px-2">Surprise Me</button>
        </p>
      </div>
    </div>
  );
};

SingleReview.propTypes = {};

export default SingleReview;
