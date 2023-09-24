import React from 'react';
import s from './FourthCard.module.scss';
import Portfolio from '../../../../../assets/img/Portfolio4.svg';
import PortfolioBlur from '../../../../../assets/img/PortfolioBlur4.svg';
import PortfolioBlurTablet from '../../../../../assets/img/PortfolioBlurTablet4.svg';

const FourthCard = () => {
  return (
    <div className={s.cardsContainer}>
      <img src={Portfolio} alt="img" className={s.cover} />
      <img src={PortfolioBlur} alt="img" className={s.blurImg} />
      <img src={PortfolioBlurTablet} alt="" className={s.blurTabletImg} />
    </div>
  );
};

export default FourthCard;
