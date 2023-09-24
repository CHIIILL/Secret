import React from 'react';
import s from './FifthCard.module.scss';
import Portfolio from '../../../../../assets/img/Portfolio5.svg';
import PortfolioImg2 from '../../../../../assets/img/PortfolioImg2.svg';
import PortfolioBlur from '../../../../../assets/img/PortfolioBlur5.svg';
import PortfolioBlurTablet from '../../../../../assets/img/PortfolioBlurTablet5.svg';

const FifthCard = () => {
  return (
    <div className={s.cardsContainer}>
      <img
        src={Portfolio}
        alt="portfolio"
        className={`${s.cover} ${s.active1}`}
      />
      <img
        src={PortfolioImg2}
        alt="portfolio"
        className={`${s.cover} ${s.active2}`}
      />
      <img src={PortfolioBlur} alt="img" className={s.blurImg} />
      <img src={PortfolioBlurTablet} alt="" className={s.blurTabletImg} />
    </div>
  );
};

export default FifthCard;
