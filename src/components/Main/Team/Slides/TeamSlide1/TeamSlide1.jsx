import React from 'react';
import s from './TeamSlide1.module.scss';
import Person1 from '../../../../../assets/img/Person1.svg';
import Person2 from '../../../../../assets/img/Person2.svg';
import Twitter from '../../../../../assets/icons/Twitter.svg';
import Instagram from '../../../../../assets/icons/Instagram.svg';
import Linkedin from '../../../../../assets/icons/Linkedin.svg';
import Facebook from '../../../../../assets/icons/Facebook.svg';

const TeamSlide1 = () => {
  return (
    <div className={s.box}>
      <div className={s.personsItem}>
        <img src={Person1} alt="personPhoto" className={s.personPhoto} />
        <p className={s.name}>Adam Zaitov</p>
        <span className={s.description}>Chief executive officer</span>
        <div className={s.icons}>
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
      <div className={s.personsItem}>
        <img src={Person2} alt="personPhoto" className={s.personPhoto} />
        <p className={s.name}>Aslan Mafet</p>
        <span className={s.description}>Head of business development</span>
        <div className={s.icons}>
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default TeamSlide1;
