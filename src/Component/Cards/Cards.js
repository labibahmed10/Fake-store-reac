import React, { useEffect, useState } from "react";
import SinglePiece from "../SinglePiece/SinglePiece";
import "./Cards.css";

const style = {
  textAlign: "center",
  margin: "20px 10px",
};

const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 style={style}>ALL Products here</h2>
      <div className="container">
        <div className="allcards">
          {products.map((product) => (
            <SinglePiece data={product}></SinglePiece>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
