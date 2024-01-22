import React from "react";
import "./ProductItem.css";
import Item from "../Item/Item";

const ProductItem = ({ products }) => {

  return (
    <div className="product-item">
      
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
};

export default ProductItem;
