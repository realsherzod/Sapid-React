import React, { useState } from 'react';
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  const [activeMenuItem, setActiveMenuItem] = useState('Главная');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);

    if (menuItem === 'Меню') {
      window.scrollTo(0, 850);
    } else if (menuItem === 'Контакты') {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  return (
    <div className='header_all'>
      <div className='header_logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='header_menus'>
        <ul>
          <li
            className={activeMenuItem === 'Главная' ? 'active' : ''}
            onClick={() => handleMenuItemClick('Главная')}
          >
            Главная
          </li>
          <li
            className={activeMenuItem === 'Меню' ? 'active' : ''}
            onClick={() => handleMenuItemClick('Меню')}
          >
            Меню
          </li>
          <li
            className={activeMenuItem === 'Контакты' ? 'active' : ''}
            onClick={() => handleMenuItemClick('Контакты')}
          >
            Контакты
          </li>
        </ul>
      </div>
      <div className='language'>
        {/* <div className='korzina' onClick={handleKorzinaClick}>
          <i className="ri-shopping-cart-2-line"></i>
          Корзина
        </div> */}
        <div className='select_lan'>
          <p className={activeMenuItem === 'RU' ? 'active' : ''}></p>RU
          
          <p className={activeMenuItem === 'UZ' ? 'active' : ''}></p>UZ
        </div>
      </div>
    </div>
  );
}

export default Header;
