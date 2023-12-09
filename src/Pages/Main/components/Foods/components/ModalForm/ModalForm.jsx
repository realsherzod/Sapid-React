import axios from 'axios';
import React, { useState } from 'react'

const ModalForm = ({ handleModalClose, handleCloseButtonClick, setModalOpen, totalPrice, localStorageData}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
      });
      
      console.log(localStorageData)
      const handleSendOrder = async () => {
      const products = localStorageData.map((itm) => ({
        id: itm.id,
        title : itm.title,
        price : itm.price,
        quantity : itm.quantity
      }))
        console.log("Sending order:", formData);
        const outer = {
          name: formData.name,
          email: formData.email,
          address: formData.address,
          phone: formData.phone,
          price: totalPrice,
          sends: products
        }

        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/sends",
            outer
          );
    
          console.log("Response:", response.data);
    
          setFormData({
            name: "",
            telephone: "",
            address: "",
            total_price: 0,
            products: [],
          });
          setModalOpen(false);
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
        });
        } catch (error) {
          console.error("Error:", error);
          console.log("Response Data:", error.response.data);
        }

        
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  return (
    <div className="modal">
    <div className="modal-content">
      <h2>Введите вашу информацию</h2>
      <label>Имя:</label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <label>Электронная почта:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      <label>Адрес:</label>
      <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      <label>Телефон:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
      <div className="modal-buttons">
        <button onClick={handleModalClose}>Закрыть</button>
        <button onClick={() => { handleCloseButtonClick(); handleSendOrder(); }}>Отправить заказ</button>

      </div>
    </div>
  </div>
  )
}

export default ModalForm