import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Topnav from "./Components/Topnav/Topnav";
import Navbar from "./Components/Navbar/Navbar";
import ShopContextProvider from "./Context/ShopContext";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart"

function App() {
  return (
    <ShopContextProvider>
      <Topnav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<ProductDetail />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
