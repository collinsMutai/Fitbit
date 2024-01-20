import { useState, createContext, useEffect } from "react";
import products from "../Components/assets/products";
export const ShopContext = createContext({});

const ShopContextProvider = ({ children }) => {
  const [all_products, setAllProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setAllProducts(products);
    }
  }, []);

  return (
    <ShopContext.Provider value={{ all_products }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
