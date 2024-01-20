import React from "react";
import "./Topnav.css";

const Topnav = () => {
  return (
    <div className="topnav">
      <p>
        Looking for something new? Meet Charge 8 & Pixel Watch 2.{" "}
        <span>
          Shop now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fillRule="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default Topnav;
