import React from 'react';
import "../assets/css/Footer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-title">Get in Touch</h2>
          <p className="footer-description">
            Ecosystem bootstrapping learning curve lean startup disruptive. Marketing long tail disruptive agile development partner.
          </p>
          <div className="footer-icons">
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin/>
            </a>
            <a href="#" target="_blank">
              <FaPinterestSquare />
            </a>
            <a href="#" target="_blank">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className='parent-footer-card'>
            <div className="footer-card">
              <MdOutlineMailOutline/> <span>dribbble.com/example</span>
            </div>
          </div>
          <div className='parent-footer-card'>
            <div className="footer-card">
              <MdOutlineMailOutline/> <span>contact@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
