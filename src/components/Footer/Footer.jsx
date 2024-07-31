import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-menu">
          <li>Arti Sangrah</li>
          <li>Chalisa Sangrah</li>
          <li>Mantra Sangrah</li>
          <li>Strota Sangrah</li>
        </div>
        <div className="footer-content-icon">
          <img src={assets.facebook} alt="" />
          <img src={assets.twitter} alt="" />
          <img src={assets.linkedin} alt="" />
        </div>
        <div className="footer-copyright">
          Copyright 2024 @ Bhaktiras.com - All Right Reserved.
        </div>

      </div>
    </div>
  )
}

export default Footer;