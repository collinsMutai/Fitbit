import React, { useContext } from "react";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import { ShopContext } from "./Context/ShopContext";
import { useParams } from "react-router-dom";
import RelatedProducts from "./Components/RelatedProducts/RelatedProducts";

const ProductDetail = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <ProductInfo product={product}/>
      <RelatedProducts all_products={all_products}/>
    </div>
  );
};

export default ProductDetail;
