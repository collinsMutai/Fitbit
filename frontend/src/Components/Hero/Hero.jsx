import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <p>New</p>
        <h1>
          Fitbit motivation. <br /> Google innovation.
        </h1>
        <h3>
          Shop Pixel Watch 2{" "}
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </h3>
        <h3>
          Shop Charge 6
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </h3>
      </div>
    </div>
  );
}

export default Hero