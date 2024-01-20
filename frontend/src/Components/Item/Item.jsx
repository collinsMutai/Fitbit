import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  console.log(product);
  return (
    <div className="item">
      <div>
        <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" />
        </Link>
        <div className="product-data">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
