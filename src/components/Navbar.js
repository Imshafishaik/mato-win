import React, { useState } from 'react';
import "../assets/css/Navbar.css";
import Logo from "../assets/images/matowinlogo.jpeg";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={Logo} alt="Mato Win Logo" className="logo-image" />
        </a>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCross2 size={30} /> : <IoMdMenu size={30} />}
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#"
            className={activeLink === "home" ? "active red-text" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#infra"
            className={activeLink === "our-shop" ? "active red-text" : ""}
            onClick={() => handleLinkClick("our-shop")}
          >
            Our Shop
          </a>
        </li>
        <li>
          <a
            href="#product"
            className={activeLink === "product-details" ? "active red-text" : ""}
            onClick={() => handleLinkClick("product-details")}
          >
            Product Details
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "contact-us" ? "active red-text signin-btn" : "signin-btn"}
            onClick={() => handleLinkClick("contact-us")}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
