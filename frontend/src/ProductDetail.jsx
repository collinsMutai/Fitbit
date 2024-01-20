import React, { useContext } from "react";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import { ShopContext } from "./Context/ShopContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <ProductInfo product={product}/>
    </div>
  );
};

export default ProductDetail;
