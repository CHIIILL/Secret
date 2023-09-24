import React from 'react';
import s from './FirstCard.module.scss';
import Portfolio from '../../../../../assets/img/Portfolio1.svg';
import PortfolioBlur from '../../../../../assets/img/PortfolioBlur1.svg';
import PortfolioBlurTablet from '../../../../../assets/img/PortfolioBlurTablet1.svg';

const FirstCard = () => {
  return (
    <div className={s.cardsContainer}>
      <img src={Portfolio} alt="img" className={s.cover} />
      <img src={PortfolioBlur} alt="img" className={s.blurImg} />
      <img src={PortfolioBlurTablet} alt="" className={s.blurTabletImg} />
    </div>
  );
};

export default FirstCard;
