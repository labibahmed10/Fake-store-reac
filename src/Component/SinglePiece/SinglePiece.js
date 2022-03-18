import React from "react";
import "./SinglePiece.css";

const SinglePiece = (props) => {
  console.log(props.data);

  const { category, description, image, price, title } = props.data;
  return (
    <div>
      <div className="card h-100 backgrnd">
        <img src={image} className="main-image" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{category}</h4>
          <h5 className="card-title">{title.slice(0, 20)}</h5>
          <div className="d-flex justify-content-between">
            <a href="#/" className="btn btn-info ">
              Details
            </a>
            <a href="#/" className="btn btn-success ">
              Check
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePiece;
