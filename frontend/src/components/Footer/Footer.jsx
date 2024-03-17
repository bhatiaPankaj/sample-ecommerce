import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo_big.png"
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";




export default function Footer() {
  return (
    <div className='footer'>
   <div className="footer_logo" >
      <img src={footer_logo} alt="" />
      <p>WADDUP SHOPPER</p>
    </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icons">
        <div className="footer_icon_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copywright@2024 - All rights reserved</p>
      </div>
    </div>
  );
}
