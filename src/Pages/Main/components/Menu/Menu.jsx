import React, { useState, useEffect } from "react";
import "./Menu.css";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [activeItem, setActiveItem] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function getCategoryName(category) {
    const lang = localStorage.getItem("lang");

    switch (lang) {
      case "ru":
        return category.name_ru;
      case "uz":
        return category.name_uz;
      case "en":
        return category.name_en;
      default:
        return category.name_en;
    }
  }
  const handleItemClick = (index) => {
    const scrollToPosition = 1000 + index * 450 + 90;
    setActiveItem(activeItem === -1 ? index : index);
    window.scrollTo(0, scrollToPosition);
  };

  return (
    <div className="menu-container">
      <div className={`menu-items ${activeItem === -1 ? "fixed" : ""}`}>
        <ul>
          <li
            className={activeItem === -1 ? "active" : ""}
            onClick={() => handleItemClick(-1)}
          >
            {t("all")}
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={activeItem === index ? "active" : ""}
            >
              {getCategoryName(category)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
