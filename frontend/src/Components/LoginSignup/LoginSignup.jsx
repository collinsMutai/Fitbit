import React, { useContext, useState } from "react";
import "./LoginSignup.css";
import fitbit_logo from "../assets/fitbit-logo.svg";
import { ShopContext } from "../../Context/ShopContext";
import { Navigate } from "react-router-dom";

const LoginSignup = () => {
  const { hide, setHide } = useContext(ShopContext);
  const [state, setState] = useState("Sign In");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("Input fields cannot be empty");
      return;
    }
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          responseData = data;
          setState("Sign In");
        }
        alert(data.message);
        console.log(data);
      });
  };
  const signin = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
        console.log(responseData);
      });
  };
  const navigateHome = () => {
    setHide(false);
  };

  if (!hide) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <img onClick={() => navigateHome()} src={fitbit_logo} alt="" />
        <p>{state}</p>
        <div className="form">
          {state === "Sign Up" ? (
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={changeHandler}
              />
            </div>
          ) : (
            <></>
          )}

          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name="email"
              placeholder="Your account email"
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Your account password"
              value={formData.password}
              onChange={changeHandler}
            />
          </div>
          <div className="button">
            {state === "Sign Up" ? (
              <button onClick={() => signup()}>{state}</button>
            ) : (
              <button onClick={() => signin()}>{state}</button>
            )}
          </div>
          {state === "Sign In" ? (
            <p className="signup-link">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="signup-link">
              Have an account?{" "}
              <span
                onClick={() => {
                  setState("Sign In");
                }}
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
