import React from 'react'
import './Header.css'
import pic from '../../assets/Hanuman.jpg'

export const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <img src={pic} alt="" />
      </div>
    </div>
  )
}

export default Header;