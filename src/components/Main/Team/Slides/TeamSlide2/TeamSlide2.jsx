import React from 'react';
import s from './TeamSlide2.module.scss';
import Person3 from '../../../../../assets/img/Person3.svg';
import Person4 from '../../../../../assets/img/Person4.svg';
import Linkedin from '../../../../../assets/icons/Linkedin.svg';

const TeamSlide2 = () => {
  return (
    <div className={s.box}>
      <div className={s.personsItem}>
        <img src={Person3} alt="personPhoto" className={s.personPhoto} />
        <p className={s.name}>Ilyas Timaev</p>
        <span className={s.description}>Backend developed</span>
      </div>
      <div className={s.personsItem}>
        <img src={Person4} alt="personPhoto" className={s.personPhoto} />
        <p className={s.name}>Mairbek Zaitov</p>
        <span className={s.description}>Front-end developed</span>
        <div className={s.icon}>
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default TeamSlide2;
