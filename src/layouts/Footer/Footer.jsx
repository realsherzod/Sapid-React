import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 ">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>{t('findus')}</h4>
                  <span>
                  {t('address')}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>{t('callus')}</h4>
                  <span>+998 77 048 77 48</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>{t('mailus')}</h4>
                  <span>sapidfoods@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-1">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-text">
                  <p>
                 {t('bigtext')}
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>{t('follow')}</span>
                  <ul className="social_icon">
                    <li>
                      <a target="_blank" href="https://facebook.com">
                      <i className="ri-facebook-circle-line"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://telegram.org">
                      <i className="ri-telegram-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://instagram.com">
                      <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://youtube.com">
                      <i className="ri-youtube-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>{t('links')}</h3>
                </div>
                <ul>
                  <li>
                    <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18">{t('team')}</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18">{t('aboutus')}</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18">{t('gallery')}</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18">{t('read')}</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18">FAQ</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://telegra.ph/Sapid-Fast-Food-12-18">{t('sponsor')}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>{t('author')}</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                   {t('sometext')}
                  </p>
                </div>
                <div className="to_up" onClick={handleScrollToTop}>
              <i className="ri-arrow-up-line"></i>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
