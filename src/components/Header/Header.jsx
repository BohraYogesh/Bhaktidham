import React from 'react'
import './Header.css'
import headerimg from '../../assets/Hanuman.jpg'

export const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <img src={headerimg} alt="" />
      </div>
    </div>
  )
}

export default Header;