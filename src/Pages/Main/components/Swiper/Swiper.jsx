import React from "react";
import burger from "../../../../assets/burger.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);
import "swiper/css";
import "./Swiper.css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function App() {
  Aos.init()
  const { t } = useTranslation();
  return (
    <div className="swiper-all">      
      <div className="burger-text">
        <h1 data-aos="zoom-in-up" >
          {t('title1')}
        </h1>
        <p data-aos="zoom-in-up"  className="burger-desc">{t('text1')}</p>
        <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18"><button data-aos="zoom-in-up"  className="burger-btn">{t('read')}</button></a>
      </div>
      <div data-aos="zoom-in-up"  className="burger-div">
<img className="burger" src={burger} alt="" />
</div>
    </div>
  );
}
