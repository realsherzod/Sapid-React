import React, { useState } from 'react';
import "./Footer.css"
import logo from "../../assets/logo.png";

function Footer() {
    const [activeMenuItem, setActiveMenuItem] = useState('Главная');

    const handleMenuItemClick = (menuItem) => {
      setActiveMenuItem(menuItem);
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div className='footer_all'>
        <div className='header_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='footer_menus'>
         <p>Sapid-Foods|Est - 2019.</p>
         <p>Bсе права защищены</p>
        </div>
        <div className='to_up' onClick={handleScrollToTop}>
        <i className="ri-arrow-up-line"></i>
        </div>
      </div>
    );
}

export default Footer;
