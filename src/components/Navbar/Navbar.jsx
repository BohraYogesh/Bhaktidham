import './Navbar.css';
import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import { Link } from 'react-scroll';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export const Navbar = () => {

  const [menu,setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false);

  const [showMenu,setShowMenu] = useState(false)  

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }


  return (
    <div className='navbar' id='sidemenu'>
      <img src={assets.logo} alt="" id="logo" />
      <ul className={isOpen? "navbar-menu active": "navbar-menu"}>
        <li><Link to="list-display" className='active' spy={true} smooth={true} offset={-75} onClick={()=>setMenu("Bhakti Sangrah")}>Bhakti Sangrah</Link></li>
        <li><Link to="dev" onClick={()=>setMenu("Devi Devta")} spy={true} smooth={true} offset={-75}>Devi Devta</Link></li>
        <li><Link to="Dharmik" spy={true} smooth={true} offset={-10} onClick={()=>setMenu("Dharmik Sthal")}>Dharmik Sthal</Link></li>
        <li><Link to="" spy={true} smooth={true} offset={-40} onClick={()=>setMenu("Bhajan")}>Bhajan</Link></li>
      </ul>
        <div className="search-box">
         <input type="text" className="search-input" placeholder='Search' />
          <div className="search-icon">
            <img src={assets.search_icon} alt="" className="search-btn" />
          </div>
          
        </div>
        <div className="bottomRight" onClick={toggleMenu}>
        <HiOutlineBars3BottomRight/>
        </div>
    </div>
  )
}

export default Navbar;