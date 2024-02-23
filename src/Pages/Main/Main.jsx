import React, { useState, useEffect } from 'react';
import About from './components/About/About';
import Animation from './components/Animation/Animation';
import Connect from './components/Connect/Connect';
import Filter from './components/Filter/Filter';
import Foods from './components/Foods/Foods';
import Menu from './components/Menu/Menu';
import Swiper from './components/Swiper/Swiper';
import './Main.css';

function Main() {
  
  return (
    <div>
      <Swiper />
      <div className='menu_div'>
        <Menu />
      </div>
      <Foods />
      <About />
      <Connect />
      {/* < Animation/> */}
 
    </div>
  );
}

export default Main;
