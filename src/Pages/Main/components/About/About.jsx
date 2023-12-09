import React, { useEffect, useState } from 'react';
import bike from "../../../../assets/bike.png";
import "./About.css";


function About() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <div data-aos="zoom-in-up" className='about_all'>
      <div className='drops'>
      <div className='drop1'>
  <p>Св. д. 46, Алмазор, Мирзо Улугбекский район</p>
      </div>
      <div className='drop2'>
<p>
  +998 77 048 77 48
</p>
<p>|</p>
<p>+998 94 620 43 20</p>
      </div>
      <div className='drop_down' onClick={toggleDropdown}>
        <div>
      Дополнительная информация
      <i className="ri-skip-down-line"></i>
      </div>
        {isDropdownOpen && (
          <div className='dropdown-content'>
         <p className='texxt'>Св. д. 46, Алмазор, Мирзо Улугбекский район</p>
         <div className='drop2'>
<p>
  +998 77 048 77 48
</p>
<p>|</p>
<p>+998 94 620 43 20</p>
      </div>
      <p>Доступна услуга доставки.</p>
          </div>
        )}
      </div>
      <div className='downloads'>
       <a href="https://googleplay.com"><div><img src="https://cdn-icons-png.flaticon.com/128/6124/6124997.png" alt="" />Google Play</div></a>
       <a href="https://appstore.com"> <div><img src="https://cdn-icons-png.flaticon.com/128/5977/5977575.png" alt="" />App Store</div></a>
       <a href="https://telegram.com"><div><img src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png" alt="" />Telegram </div></a>
       <a href="https://instagram.com"><div><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />Instagram</div> </a>
      </div>
      </div>
      <div className='bikee'>
        <img className='bike' src={bike} alt="rasm" />
      </div>
    </div>
  );
}

export default About;
