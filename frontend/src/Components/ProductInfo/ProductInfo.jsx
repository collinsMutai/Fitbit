import React from "react";
import "./ProductInfo.css";
import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
 
  return (
    <div className="productinfo">
      <div className="product-gallery">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className="product-main-image">
        <img src={product.image} alt="" />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <h4>${product.price}</h4>
        <hr />
        <p>
          Learn to manage stress & sleep better with our most advanced health &
          fitness smartwatch. Includes 6-month Fitbit Premium membership.†
        </p>

        <Link to={"/cart"}>
          
          <button>Add to Cart </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
