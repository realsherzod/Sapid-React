import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ModalForm = ({
  handleModalClose,
  handleCloseButtonClick,
  setModalOpen,
  totalPrice,
  localStorageData,
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  console.log(localStorageData);

  const handleSendOrder = async () => {
    const products = localStorageData.map((itm) => ({
      id: itm.id,
      title: itm.title,
      price: itm.price,
      quantity: itm.quantity,
    }));
    console.log('Sending order:', formData);
    const outer = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      price: totalPrice,
      sends: products,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/sends', outer);
      console.log('Sending order:', outer);

      localStorage.clear();
      window.location.reload();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      setFormData({
        name: '',
        phone: '',
        address: '',
        total_price: 0,
        products: [],
      });
      setModalOpen(false);
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: '',
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      console.log('Response Data:', error.response?.data);
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
      {showAlert && (
        <div className="alert alert-success show" role="alert">
          {t("modal2")}
          <i className="ri-check-double-line"></i>
        </div>
      )}
      <div className="modal-content">
        <h2>{t('information')}</h2>
        <label>{t('name')}:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <label>{t('email')}:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        <label>{t('address1')}:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        <label>{t('phone')}:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        <div className="modal-buttons">
          <button onClick={handleModalClose}>{t('close')}</button>
          <button onClick={() => { handleCloseButtonClick(); handleSendOrder();}}>
            {t('send')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
