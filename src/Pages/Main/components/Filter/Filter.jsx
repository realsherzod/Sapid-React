import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import "./FIlter.css"
import loader from "../../../../assets/loader.gif"

const Filter = ({handleAddToCart}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [cards, setCards] = useState([]);


const apiUrlCategories = "http://127.0.0.1:8000/api/categories";

  useEffect(() => {
    axios
      .get(apiUrlCategories)
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/foods")
      .then((response) => {
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(true);
      });
  }, []);
  function getCategoryName(category) {
    const lang = localStorage.getItem('lang');
  
    switch (lang) {
      case 'ru':
        return category.name_ru;
      case 'uz':
        return category.name_uz;
      case 'en':
        return category.name_en;
      default:
        return category.name_ru; 
    }
  }
  function getFoodName(food) {
    const lang = localStorage.getItem('lang');
  
    switch (lang) {
      case 'ru':
        return food.title_ru;
      case 'uz':
        return food.title_uz;
      case 'en':
        return food.title_en;
      default:
        return food.title_ru; 
    }
  }
  function getFoodDescription(food) {
    const lang = localStorage.getItem('lang');
  
    switch (lang) {
      case 'ru':
        return food.description_ru;
      case 'uz':
        return food.description_uz;
      case 'en':
        return food.description_en;
      default:
        return food.description_ru; 
    }
  }
  return (
    <>
      {loading ? (
         <div className="loader">
         <img src={loader} alt="" />
         </div>
      ) : (
        <>
          <div className="content" id="menu">
            <div>
              {categoryData.map((category) => (
                <div className="content__inner" key={category.id}>
                  <div className="content__top" id={`section${category.id}`}>
                    {" "}
                    {/* Fix here */}
                    <h2 className="filter_title">{getCategoryName(category)}</h2>
                  </div>
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                  >
                    {cards
                      .filter((food) => food.category_id == category.id)
                      .map((food, index) => (
                        <SwiperSlide className="swiper1 filter-swiper" key={food.id}>
                          <div>
                          <img
                className="food_image"
                src={`http://127.0.0.1:8000/storage/${food.image}`}
                alt={`Food: ${food.title}`}
              />
                          <div className="foods_text">
                            <p className="food_title">{getFoodName(food)}</p>
                            <p className="food_description">
                              {getFoodDescription(food) }
                            </p>
                            <p className="food_price">
                              {food.price} {t("sum")}
                            </p>
                            <div className="div_bottom">
                  <div>
                    <button
                      className="add_to_cart_button"
                      onClick={() => handleAddToCart(food, index)}
                    >
                      {t("add")}
                    </button>
                  </div>
                </div>
                          </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
