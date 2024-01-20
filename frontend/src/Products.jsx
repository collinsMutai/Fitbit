import React, { useContext } from "react";
import './CSS/Products.css'
import ProductItem from "./Components/ProductItem/ProductItem";
import { ShopContext } from "./Context/ShopContext";

const Products = () => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="products">
      <h1>Smartwatches</h1>
      <ProductItem products={all_products} />
    </div>
  );
};

export default Products;
