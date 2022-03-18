import React, { useEffect, useState } from "react";
import SinglePiece from "../SinglePiece/SinglePiece";
import "./Cards.css";

const style = {
  textAlign: "center",
  margin: "20px 10px",
  color: "navy",
};

const Cards = ({ func,number }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 style={style}>ALL Products here</h2>
      <div>
        <div className="allcards">
          {products.map((product) => (
            <SinglePiece number={number} func={func} data={product}></SinglePiece>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
