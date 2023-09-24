import React from 'react';
import s from './ThirdCard.module.scss';
import Portfolio from '../../../../../assets/img/Portfolio3.svg';
import PortfolioBlur from '../../../../../assets/img/PortfolioBlur3.svg';
import PortfolioBlurTablet from '../../../../../assets/img/PortfolioBlurTablet3.svg';

const ThirdCard = () => {
  return (
    <div className={s.cardsContainer}>
      <img src={Portfolio} alt="img" className={s.cover} />
      <img src={PortfolioBlur} alt="img" className={s.blurImg} />
      <img src={PortfolioBlurTablet} alt="" className={s.blurTabletImg} />
    </div>
  );
};

export default ThirdCard;
