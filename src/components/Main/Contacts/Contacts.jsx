import React from 'react';
import s from './Contacts.module.scss';
import Letter from '../../../assets/icons/LetterBlue.svg';
import MapPoint from '../../../assets/icons/MapPoint.svg';

const Contacts = () => {
  return (
    <section className={s.section}>
      <h5 className={s.title}>Our Contacts</h5>
      <div>
        <div className={s.mapPoint}>
          <img src={MapPoint} alt="map-point" />
          <p>
            IOSB MAH.GIY. SANAT. 1A Block SK.GIY.SNAT.TIC.MER.1A 1A/!B023,
            Istanbul, Turkey
          </p>
        </div>
        <div className={s.emails}>
          <img src={Letter} alt="email" />
          <p className={s.email}>
            info@intellectero.com support@intellectero.com
          </p>
          <div className={s.emailPhone}>
            <p>info@intellectero.com</p>
            <span>support@intellectero.com</span>
          </div>
        </div>
      </div>
      <div className={s.map}>
        <iframe
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZZr5B4OlyhQRnPu6ghQtVd4&key=AIzaSyD6qMZgF2V7SrMIhhy7C2hS6JhUZGd8RuA"></iframe>
      </div>
    </section>
  );
};

export default Contacts;
