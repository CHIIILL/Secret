import React from 'react';
import s from './AboutUs.module.scss';
import AboutUsImg from '../../../assets/img/AboutUs.svg';
import Points from '../../../assets/icons/Points.svg';
import MapPoint from '../../../assets/icons/MapPoint.svg';

const AboutUs = () => {
  return (
    <section className={s.section} id="About%20us">
      <div className={s.aboutUsImg}>
        <img src={AboutUsImg} alt="AboutUs" />
      </div>
      <div className={s.box}>
        <span className={s.title}>&#47;&#47;About Us</span>
        <h5 className={s.subtitle}>
          Meet with Intellectero, the FinTech, Blockchain, DeFi and NFT
          Development Company
        </h5>
        <div className={s.points}>
          <img src={Points} alt="points" />
        </div>
        <span className={s.description}>
          Intellectero is your development solution:
        </span>
        <div className={s.cards}>
          <div className={s.cardsLines}>
            <div className={s.cardItem}>
              <span>01</span>
              <p>
                Our main benefit ia an ability to develop projects from a
                scratch on a turnkay basis
              </p>
            </div>
            <div className={s.cardItem}>
              <span>02</span>
              <p>
                We gathered the best specialists and now our team consists of
                more than 20 members.
              </p>
            </div>
          </div>
          <div className={s.cardsLines}>
            <div className={s.cardItem}>
              <span>03</span>
              <p>
                We can implement your idea into real life and provide you with a
                completely finished product that is ready for use.
              </p>
            </div>
            <div className={s.cardItem}>
              <span>04</span>
              <p>
                Our professionals have succssesfuly worked with Smart Donation
                Coint,Zeus Group, QSoft, Otto Group, BitOnux Labs Limited etc.
              </p>
            </div>
          </div>
        </div>
        <div className={s.location}>
          <img src={MapPoint} alt="MapPoint" />
          <span>Istanbul, Turkey</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
