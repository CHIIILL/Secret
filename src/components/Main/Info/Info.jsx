import React from 'react';
import s from './Info.module.scss';
import Logo from '../../../assets/icons/Logo.svg';
import BlueFacebook from '../../../assets/icons/BlueFacebook.svg';
import BlueTwitter from '../../../assets/icons/BlueTwitter.svg';
import BlueLinkedin from '../../../assets/icons/BlueLinkedin.svg';

const Info = () => {
  return (
    <section className={s.section}>
      <img src={Logo} alt="logo" />
      <p className={s.description}>
        Intellectero is a full-stack development company that operates in
        FinTech, DeFi, NFT and Blockchain industries.
      </p>
      <div className={s.icons}>
        <img src={BlueFacebook} alt="facebook" />
        <img src={BlueTwitter} alt="twitter" />
        <img src={BlueLinkedin} alt="linkedin" />
      </div>
    </section>
  );
};

export default Info;
