import React from 'react';
import s from './Slide1.module.scss';
import Partners1 from '../../../../../assets/icons/Partners1.svg';
import Partners2 from '../../../../../assets/icons/Partners2.svg';
import Partners3 from '../../../../../assets/icons/Partners3.svg';

const Slide1 = () => {
  return (
    <div className={s.box}>
      <img src={Partners1} alt="partner" />
      <img src={Partners2} alt="partner" />
      <img src={Partners3} alt="partner" />
    </div>
  );
};

export default Slide1;
