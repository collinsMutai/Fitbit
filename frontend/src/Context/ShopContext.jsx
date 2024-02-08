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
  const [items, setItems] = useState(0);
  const [hide, setHide] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    let number_of_items = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  useEffect(() => {
    if (products) {
      setAllProducts(products);
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        all_products,
        toggle,
        setToggle,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        hide,
        setHide,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
