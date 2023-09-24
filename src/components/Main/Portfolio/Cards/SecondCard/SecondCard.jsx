import React from 'react';
import s from './SecondCard.module.scss';
import Portfolio from '../../../../../assets/img/Portfolio2.svg';
import PortfolioImg1 from '../../../../../assets/img/PortfolioImg1.svg';
import PortfolioBlur from '../../../../../assets/img/PortfolioBlur2.svg';
import PortfolioBlurTablet from '../../../../../assets/img/PortfolioBlurTablet2.svg';

const SecondCard = () => {
  return (
    <div className={s.cardsContainer}>
      <img
        src={Portfolio}
        alt="portfolio"
        className={`${s.cover} ${s.active1}`}
      />
      <img
        src={PortfolioImg1}
        alt="portfolio"
        className={`${s.cover} ${s.active2}`}
      />
      <img src={PortfolioBlur} alt="portfolio" className={s.blurImg} />
      <img src={PortfolioBlurTablet} alt="" className={s.blurTabletImg} />
    </div>
  );
};

export default SecondCard;
