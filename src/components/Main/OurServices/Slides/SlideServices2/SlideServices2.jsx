import React from 'react';
import s from './SlideServices2.module.scss';
import Service1 from '../../../../../assets/icons/Service1.svg';
import Service3 from '../../../../../assets/icons/Service3.svg';

const SlideServices2 = () => {
  return (
    <div className={s.box}>
      <div className={s.cardsItem}>
        <img src={Service3} alt="" />
        <p className={s.cardTitle}>Big Data Solution</p>
        <p className={s.cardDescription}>
          Can`t deal with a huge amount of data? Intellectero will help you to
          manage the processes with ease and pleasure! Get hight-load
          infastructure solution for your project
        </p>
      </div>
      <div className={s.cardsItem}>
        <img src={Service1} alt="" />
        <p className={s.cardTitle}>Big Data Solution</p>
        <p className={s.cardDescription}>
          Can`t deal with a huge amount of data? Intellectero will help you to
          manage the processes with ease and pleasure! Get hight-load
          infastructure solution for your project
        </p>
      </div>
    </div>
  );
};

export default SlideServices2;
