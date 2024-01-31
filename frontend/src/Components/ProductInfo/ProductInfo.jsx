import React, { useContext } from "react";
import "./ProductInfo.css";
import { Link } from "react-router-dom";
import Cart from "../../Cart";
import { ShopContext } from "../../Context/ShopContext";

const ProductInfo = ({ product }) => {
  const { toggle, setToggle, addToCart } = useContext(ShopContext);
  function handleAddToCart (){
    
    addToCart(Number(product.id))
  }

  return (
    <>
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
            Learn to manage stress & sleep better with our most advanced health
            & fitness smartwatch. Includes 6-month Fitbit Premium membership.†
          </p>

          <button onClick={handleAddToCart}>Add to Cart </button>
        </div>
      </div>

      {toggle && <Cart product={product}/>}
    </>
  );
};

export default ProductInfo;
