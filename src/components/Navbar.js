import React, { useState } from 'react';
import "../assets/css/Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMenu,setIsMenu] = useState(false);
  return (
    <div className='matowin_navbar'>
      <div className='matowin_nav_icons'>
        {isMenu ? <RxCross2 size={30} onClick={()=>setIsMenu(false)} color='#fff' />:
        <IoMdMenu onClick={()=>setIsMenu(true)} size={30} color='#fff' />}
      </div>
      <ul className={isMenu ? "nav_active":"nav_inactive"}>
        <li>
            <a href='#home'>Home</a>
        </li>
        <li>
            <a href='#about'>About</a>
        </li>
        <li>
            <a href='#products'>Products</a>
        </li>
        <li>
            <a href='#services'>Services</a>
        </li>
        {/* <li>
            <a href='#contact'>Contact Us</a>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar
