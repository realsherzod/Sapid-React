import React, { useEffect } from 'react';
import L from 'leaflet';
import "./Connect.css"
import { useTranslation } from 'react-i18next';

function Connect() {
    const { t } = useTranslation();
  useEffect(() => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');

    if (!mapContainer || mapContainer._leaflet_id) {
      return; // Map is already initialized or the container doesn't exist
    }

    // Initialize the map
    const map = L.map(mapContainer).setView([41.2615, 69.2177], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([41.2615, 69.2177])
      .addTo(map)
      .bindPopup('SAPID - FAST FOOD')
      .openPopup();
  }, []); 

  return(
    <div className='connect-big'>
  <div className='connect-all'>
    <div className='connect-info'>
        <h1>{t('choose')}</h1>
        <div className="connection">
       <ol>
        <li>{t('reason1')}</li>
        <li>{t('reason2')}</li>
        <li>{t('reason3')}</li>
       </ol>
       <ol>
        <li>{t('reason4')}</li>
        <li>{t('reason5')}</li>
        <li>{t('reason7')}</li>
        </ol>
        </div>
    </div>
   </div>
   <div id="map"></div>
   </div>
)}

export default Connect;
