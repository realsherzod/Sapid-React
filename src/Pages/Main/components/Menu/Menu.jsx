import React, { useState, useEffect } from 'react';
import './Menu.css';


function Menu() {

  const [categories, setCategories] = useState([]);
  const [activeItem, setActiveItem] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === -1 ? index : index);
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
        <ul>
          <li className={activeItem === -1 ? 'active' : ''} onClick={() => handleItemClick(-1)}>
            все
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={activeItem === index ? 'active' : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
