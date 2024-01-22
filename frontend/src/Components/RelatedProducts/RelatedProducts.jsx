import React from "react";
import "./RelatedProducts.css";
import ProductItem from "../ProductItem/ProductItem";

const RelatedProducts = ({ all_products }) => {
  const randomProducts = [...all_products].sort(() => 0.5 - Math.random());

  return (
    <div className="related-products">
      <h1>You might also like</h1>
      <ProductItem products={randomProducts.slice(0, 3)} />
    </div>
  );
};

export default RelatedProducts;
