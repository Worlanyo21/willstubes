import React from "react";
import {Link} from "react-router-dom";
import brand from "./Images/brand11.png";

//import { RiInstagramLine } from 'react-icons/Ri';


function Footer() {
  return (
    <div className="footer">
      <div className="LastNote">
      <div>
      <p>Contact Us : +233 200 906 208</p>
      <p>Email Us : <span><a href="williamagordo01@gmail.com" style={{color: "white", fontStyle: "italic"}}>williamagordo01@gmail.com</a></span></p>
        <p>
          Our Company | Terms of Service | Privacy Policy | Refund and Returns
          Policy
        </p>
        <p><Link to="/AboutUs" style={{color: "white", fontStyle: "italic"}}>Learn More About Us</Link></p>

        <p className="">2023 Willag. All Rights reserved.</p>
      </div>
        <div>
        <div className="gpt3__navbar-links_logo">
            <img src={brand} alt='log' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
