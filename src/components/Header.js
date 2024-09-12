import React from 'react';
import "../assets/css/Header.css";
import Logo from "../assets/images/matlogo.png"
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='matowin_header'>
      <div className='matowin_logo'>
        <img src={Logo} alt='logo'/>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
