import React, { useState } from 'react';
import { FaRegFileAlt, FaRegTimesCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GoPaperAirplane } from "react-icons/go";
import { IoAppsOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";

import './header.css';


const Header = () => {

    const [Toggle, showMenu] = useState(false);

  return (
    <div className='header'>
        <nav className='nav container'>
            <a href="#home" className='nav_logo' >
                Sohan
            </a>
            <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className='nav_list grid'>
                    <li className='nav_item'>
                        <a href="/" className='nav_link active-link'>
                            <TiHomeOutline className='nav_icon'/>
                            Home
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href="#about" className='nav_link'>
                            <FiUser className='nav_icon'/>
                            About
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href="#skills" className='nav_link'>
                        <FaRegFileAlt className='nav_icon' />
                            Skills
                        </a>
                    </li>


                    <li className='nav_item'>
                        <a href="#portfolio" className='nav_link'>
                        <MdOutlineBusinessCenter className='nav_icon' />
                            Portfolio
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href="#contact" className='nav_link'>
                        <GoPaperAirplane className='nav_icon' />
                            Contact
                        </a>
                    </li>

                </ul>
         
                <FaRegTimesCircle className='nav_close'  onClick={() =>showMenu(!Toggle)}/>
                
            </div>

            <div className="nav_toggle" onClick={() =>showMenu(!Toggle)}>
            <IoAppsOutline className='nav_icon' />
            </div>
        </nav>

    </div>
  )
}

export default Header