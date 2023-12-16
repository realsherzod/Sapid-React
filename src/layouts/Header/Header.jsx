import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import rus from "../../assets/rus.png";
import uzbek from "../../assets/uzbek.png";
import english from "../../assets/english.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const changeLanguageRu = () => {
    localStorage.setItem("lang", "ru");
  };

  const changeLanguageUz = () => {
    localStorage.setItem("lang", "uz");
  };

  const changeLanguageEn = () => {
    localStorage.setItem("lang", "en");
  };

  const handleMenuItemClick = (menuItem) => {
  

    if (menuItem === "Меню") {
      window.scrollTo(0, 550);
    } else if (menuItem === "Контакты") {
      window.scrollTo(0, document.body.scrollHeight);
    } else if(menuItem === "Главная"){
      window.scrollTo(0, 0)
    }
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const closeLanguageDropdown = () => {
    setLanguageDropdownOpen(false);
  };

  return (
    <div className="header_all">
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_menus">
        <ul>
          <li onClick={() => handleMenuItemClick("Главная")}>{t("main")}</li>
          <li onClick={() => handleMenuItemClick("Меню")}>{t("menu")}</li>
          <li onClick={() => handleMenuItemClick("Контакты")}>{t("contact")}</li>
        </ul>
      </div>
      <div className="language">
        <div className="language-toggle" onClick={toggleLanguageDropdown}>
          <i className="ri-global-line"></i>
        </div>
        {isLanguageDropdownOpen && (
          <div className="language-dropdown" onBlur={closeLanguageDropdown}>
            <div className="flag-divs">
              <a href="/" onClick={() => changeLanguageRu()}>
                <img className="flags" src={rus} alt="rus" />
                Ru
              </a>
            </div>
            <div className="flag-divs">
              <a href="/" onClick={() => changeLanguageEn()}>
                <img className="flags" src={english} alt="english" />
                En
              </a>
            </div>
            <div className="flag-divs">
              <a href="/" onClick={() => changeLanguageUz()}>
                <img className="flags" src={uzbek} alt="uzbek" />
                Uz
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
