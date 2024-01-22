import { useState, createContext, useEffect } from "react";
import products from "../Components/assets/products";
export const ShopContext = createContext({});

const getCart = () => {
  let cart = {};
  for (let index = 0; index < products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_products, setAllProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState(getCart());
  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    if (products) {
      setAllProducts(products);
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{ all_products, toggle, setToggle, addToCart, removeFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
