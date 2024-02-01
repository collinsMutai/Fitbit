import "./App.css";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./Products";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetail from "./ProductDetail";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<ProductDetail />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
