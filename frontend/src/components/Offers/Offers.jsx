import React from 'react'
import "./Offers.css"
import exclusive_image from "../../assets/exclusive_image.png"

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>only on best sellers</p>
        <button>Check ow</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers