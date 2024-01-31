import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ShopContext } from "../../Context/ShopContext";
import Topnav from "../Topnav/Topnav";

const Navbar = () => {
  const {hide, setHide} = useContext(ShopContext)
 
  const handleShow = () => {
    setHide(true);
  };
  return (
    <>
      {!hide && (
        <>
        <Topnav />
          <div className="navbar">
            <div className="navbar-left">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className="navbar-left-links">
                <li>
                  <Link
                    to={"/products"}
                    style={{ textDecoration: "none", color: "#002a3a" }}
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-right">
              <p>by Google</p>

              <div className="navbar-right-icons">
                <Link
                  to={"/loginsignup"}
                  style={{ color: "#002a3a" }}
                  onClick={handleShow}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
