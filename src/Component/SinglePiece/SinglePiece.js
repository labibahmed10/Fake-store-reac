import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SinglePiece.css";

const SinglePiece = ({ number, func, data }) => {
  console.log(number);

  const { category, image, title } = data;
  return (
    <div>
      <div className="card h-100 backgrnd">
        <img src={image} className="main-image" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{category}</h4>
          <h5 className="card-title">{title.slice(0, 20)}</h5>
          <div className="d-flex justify-content-between">
            {/* <a href="#/" className="btn btn-info ">
              Details
            </a> */}
            <ReactModal></ReactModal>
            <a href="#/" className="btn btn-success ">
              Check
            </a>
            <a onClick={() => func(number + 1)} href="#/" className="btn btn-success ">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePiece;
