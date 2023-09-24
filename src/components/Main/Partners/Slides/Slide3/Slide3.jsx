import React from 'react';
import s from './Slide3.module.scss';
import Partners7 from '../../../../../assets/icons/Partners7.svg';
import Partners8 from '../../../../../assets/icons/Partners8.svg';
import Partners9 from '../../../../../assets/icons/Partners9.svg';

const Slide3 = () => {
  return (
    <div className={s.box}>
      <img src={Partners7} alt="partner" />
      <img src={Partners8} alt="partner" />
      <img src={Partners9} alt="partner" />
    </div>
  );
};

export default Slide3;
