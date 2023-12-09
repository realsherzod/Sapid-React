import React from "react";
import img1 from "../../../../assets/img1.jpg";
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";
import img4 from "../../../../assets/img4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);
import "swiper/css";
import "./Swiper.css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img1} alt="rasm" />
            <div className="text-overlay">
              <h1 className="title">Ингредиенты Превосходства</h1>
              <p className="title2">
                Наши шеф-повара тщательно отбирают только самые свежие и
                качественные ингредиенты. Мы гордимся тем, что каждый наш
                бургер, каждый картофель-фри, словно картина, воплощает в себе
                искусство кулинарии.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img2} alt="rasm" />
            <div className="text-overlay">
              <h1 className="title">Быстро и Без Заморочек</h1>
              <p className="title2">
                В нашем ритме жизни каждая минута ценна, и мы это понимаем. Мы
                гарантируем, что ваш заказ будет готов к моменту, когда вы
                только пожелаете утолить свой голод.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img3} alt="rasm" />
            <div className="text-overlay">
              <h1 className="title">Разнообразие по-настоящему вкусных блюд</h1>
              <p className="title2">
                От сочных бургеров до хрустящих крыльев – у нас есть всё! Наше
                меню предоставляет разнообразие блюд, чтобы удовлетворить самые
                изысканные вкусовые предпочтения.
                Наша команда создает каждый продукт с любовью, мы ценим наших гостей и стремимся сделать ваше посещение у нас незабываемым.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img4} alt="rasm" />
            <div className="text-overlay">
              <h1 className="title">Любовь к Нашим Гостям</h1>
              <p className="title2">
                Выберите нас, и наслаждайтесь каждым кусочком! Мы гарантируем,
                что ваши вкусовые рецепторы будут в восторге, а ваш выбор – в
                пользу нашего фаст-фуда – будет полностью оправданным. Приходите
                к нам и погрузитесь в мир вкуса и удовольствия!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
