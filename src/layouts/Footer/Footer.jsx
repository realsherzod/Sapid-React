import React, { useState } from 'react';
import "./Footer.css"
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
    const [activeMenuItem, setActiveMenuItem] = useState('Главная');

    const handleMenuItemClick = (menuItem) => {
      setActiveMenuItem(menuItem);
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div className='footer_all'>
        <div className='footer_logo'>
       <h1>SAPID</h1>
        </div>
        <div className='footer_menus'>
         <p>Sapid-Foods|Est - 2023.</p>
         <p>-</p>
         <p>{t('defence')}</p>
         <p>-</p>
         <p>{t('author')}</p>
        </div>
        <div className='to_up' onClick={handleScrollToTop}>
        <i className="ri-arrow-up-line"></i>
        </div>
      </div>
    );
}

export default Footer;
