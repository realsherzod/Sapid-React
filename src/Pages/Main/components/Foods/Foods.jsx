import React, { useEffect, useState } from "react";
import ModalForm from "./components/ModalForm/ModalForm";
import "./Foods.css";

function Foods() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const [foodsData, setFoodsData] = useState([]);
  const [counts, setCounts] = useState([]);
  const [isBasketPopupVisible, setBasketPopupVisible] = useState(false);
  const [localStorageData, setLocalStorageData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonTexts, setButtonTexts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/foods");
        const data = await response.json();
        setFoodsData(data);
        setCounts(Array(data.length).fill(0));
      } catch (error) {
        console.error("fetch error", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setLocalStorageData(parsedData);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const handleCloseButtonClick = () => {
    setBasketPopupVisible(false);
  };

  const handleSendButtonClick = () => {
    if (localStorageData.length > 0) {
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // const handleIncrement = (index) => {
  //   setLocalStorageData((prevData) => {
  //     const updatedData = prevData.map((item, i) => {
  //       if (i === index) {
  //         return { ...item, quantity: item.quantity + 1 };
  //       }
  //       return item;
  //     });

  //     saveDataToLocalStorage(updatedData);
  //     return updatedData;
  //   });
  // };

  // const handleDecrement = (index) => {
  //   setLocalStorageData((prevData) => {
  //     const updatedData = prevData.map((item, i) => {
  //       if (i === index) {
  //         const newQuantity = item.quantity - 1;

  //         if (newQuantity >= 0) {
  //           return { ...item, quantity: newQuantity };
  //         }
  //         return item;
  //       }
  //       return item;
  //     });

  //     saveDataToLocalStorage(updatedData);
  //     return updatedData;
  //   });
  // };

  const handleBasketClick = () => {
    setBasketPopupVisible(!isBasketPopupVisible);
  };

  const handleAddToCart = (food, index) => {
    const quantity = counts[index] + 1;

    const existingCart = [...localStorageData];
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === food.id
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push({ ...food, quantity });
    }
    setLocalStorageData(existingCart);
    saveDataToLocalStorage(existingCart);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);

  };
  const handleIncrementBasket = (index) => {
    setLocalStorageData((prevData) => {
      const updatedData = prevData.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      saveDataToLocalStorage(updatedData);
      return updatedData;
    });
  };

  const handleDecrementBasket = (index) => {
    setLocalStorageData((prevData) => {
      const updatedData = prevData
        .map((item, i) => {
          if (i === index) {
            const newQuantity = item.quantity - 1;

            if (newQuantity > 0) {
              return { ...item, quantity: newQuantity };
            }
            return null;
          }
          return item;
        })
        .filter(Boolean);

      saveDataToLocalStorage(updatedData);
      return updatedData;
    });
  };

  const updateQuantity = (index, increment) => {
    setLocalStorageData((prevData) => {
      const updatedData = prevData
        .map((item, i) => {
          if (i === index) {
            const newQuantity = item.quantity + increment;

            if (newQuantity > 0) {
              return { ...item, quantity: newQuantity };
            }
            return null;
          }
          return item;
        })
        .filter(Boolean);

      saveDataToLocalStorage(updatedData);
      return updatedData;
    });
  };

  const calculateTotalSum = () => {
    return localStorageData.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const calculateTotalQuantity = () => {
    return (
      localStorageData.reduce((total, item) => total + item.quantity, 0) || 0
    );
  };

  return (
    <div className="parent-div">
        {showAlert && (
            <div className="alert alert-success show" role="alert">
              Заказ успешно добавлен!
            </div>
          )}
      <div data-aos="zoom-in-up" className="basket" onClick={handleBasketClick}>
        <i className="ri-shopping-basket-2-line"></i>
        {calculateTotalSum()} сум
      </div>
      <div data-aos="zoom-in-up" className="foods_all">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching data</p>
        ) : (
          foodsData.map((food, index) => (
            <div className="foods_card" key={index}>
              <img
                className="food_image"
                src={`http://127.0.0.1:8000/storage/${food.image}`}
                alt={`Food: ${food.title}`}
              />
              <p className="food_title">{food.title}</p>
              <p className="food_description">{food.description}</p>
              <p className="food_price">{food.price} сум</p>
              <div className="div_bottom">
              <div>
      <button
        className="add_to_cart_button"
        onClick={() => handleAddToCart(food, index)}
      >
        Добавить
      </button>

    </div>
              </div>
            </div>
          ))
          )}
        
        <div className={`basket-popup ${isBasketPopupVisible ? "active" : ""}`}>
          <div
            className="basket-popup-content"
            style={{
              padding: "20px",
              background: "#fff",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Ваши заказы:
            </p>
            {localStorageData.length > 0 ? (
              <div>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {localStorageData.map((item, index) => (
                    <div
                      key={index}
                      className="card_all"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "10px",
                      }}
                    >
                      <div className="card_items" style={{ flex: 1 }}>
                        <p
                          className="food_title"
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="food_price"
                          style={{ fontSize: "14px", color: "#777" }}
                        >
                          {item.price} сум
                        </p>
                        <div
                          className="card_count"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",
                          }}
                        >
                          <p
                            className="count_button"
                            onClick={() => handleDecrementBasket(index)}
                            style={{
                              cursor: "pointer",
                              fontSize: "18px",
                              marginRight: "5px",
                            }}
                          >
                            -
                          </p>
                          <p
                            className="count_value"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            {item.quantity}
                          </p>
                          <p
                            className="count_button"
                            onClick={() => handleIncrementBasket(index)}
                            style={{
                              cursor: "pointer",
                              fontSize: "18px",
                              marginLeft: "5px",
                            }}
                          >
                            +
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          className="card_image"
                          src={`http://127.0.0.1:8000/storage/${item.image}`}
                          alt={`Food: ${item.title}`}
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Итого: {calculateTotalSum()}
                  </p>
                </ul>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p className="empty-card" style={{ fontSize: "24px" }}>
                  Ваша корзина пуста.
                </p>
                <img
                  className="empty"
                  src="https://cdn-icons-png.flaticon.com/128/9752/9752284.png"
                  alt=""
                />
              </div>
            )}
            <div className="card-buttons">
              <button
                onClick={handleCloseButtonClick}
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  fontSize: "16px",
                  marginRight: "10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  backgroundColor: "#BE3144",
                  border: "none",
                  color: "white",
                }}
              >
                Закрыть
              </button>
              <button
                onClick={(e) => {
                  handleSendButtonClick(e);
                  handleCloseButtonClick(e);
                }}
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  backgroundColor: "#1C786B",
                  border: "none",
                  color: "white",
                }}
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ModalForm
          localStorageData={localStorageData}
          totalPrice={calculateTotalSum()}
          handleModalClose={handleModalClose}
          setModalOpen={setModalOpen}
          handleCloseButtonClick={handleCloseButtonClick}
        />
      )}
    </div>
  );
}

export default Foods;
