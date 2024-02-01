import React, { useState, useContext } from "react";
import "./CSS/Cart.css";
import { ShopContext } from "./Context/ShopContext";

const Cart = () => {
  const [close, setClose] = useState(false);
  const {
    setToggle,
    cartItems,
    all_products,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    showCart,
    setShowCart,
  } = useContext(ShopContext);
  function closeHandler() {
    setClose(true);
    setToggle(false);

    if (setShowCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  return (
    <div className={close ? "close-btn" : "content"}>
      <div className="cart-contents">
        <button onClick={closeHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div>
          <h3>
            Basket summary ({getTotalCartItems()})
            <span>${getTotalCartAmount()}</span>
          </h3>
          {all_products.map(
            (e) =>
              cartItems[e.id] > 0 && (
                <div key={e.id}>
                  <div className="summary">
                    <hr />
                  </div>
                  <div className="cart-item-details">
                    <img src={e.image} alt="" />
                    <p>{e.name}</p>
                    <div>
                      <p>${e.price * cartItems[e.id]}</p>
                      <a href="">Remove</a>
                    </div>
                  </div>
                  <div className="cart-item-details-icons">
                    <svg
                      onClick={() => removeFromCart(e.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                    <span>{cartItems[e.id]}</span>
                    <svg
                      onClick={() => addToCart(e.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
