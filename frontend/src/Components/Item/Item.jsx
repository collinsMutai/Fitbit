import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  
  return (
    <Link
      onClick={window.scrollTo(0, 0)}
      to={`/product/${product.id}`}
      className="item"
      style={{ textDecoration: "none" }}
    >
      <div>
        <img src={product.image} alt="" />
        <div className="product-data">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="item-btn">Shop</button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
