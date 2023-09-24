import React from 'react';
import s from './Slide2.module.scss';
import Partners4 from '../../../../../assets/icons/Partners4.svg';
import Partners5 from '../../../../../assets/icons/Partners5.svg';
import Partners6 from '../../../../../assets/icons/Partners6.svg';

const Slide2 = () => {
  return (
    <div className={s.box}>
      <img src={Partners4} alt="partner" />
      <img src={Partners5} alt="partner" />
      <img src={Partners6} alt="partner" />
    </div>
  );
};

export default Slide2;
