import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" style={{color:"whitesmoke"}}/>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span style={{color:'rgb(252, 247, 247)'}}>Qualtiy</span>
          <span style={{color:'rgb(252, 247, 247)'}}>Help</span>
          <span style={{color:'rgb(252, 247, 247)'}}>Share</span>
          <span style={{color:'rgb(252, 247, 247)'}}>Carrers</span>
          <span style={{color:'rgb(252, 247, 247)'}}>Testimonials</span>
          <span style={{color:'rgb(252, 247, 247)'}}>Work</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:'rgb(252, 247, 247)'}}>244-5333-7783</span>
          <span style={{color:'rgb(252, 247, 247)'}}>hello@food.com</span>
          <span style={{color:'rgb(252, 247, 247)'}}>press@food.com</span>
          <span style={{color:'rgb(252, 247, 247)'}}>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:'rgb(252, 247, 247)'}}>Terms & Conditions</span>
          <span style={{color:'rgb(252, 247, 247)'}}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
