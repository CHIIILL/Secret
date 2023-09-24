import { useState, useEffect } from 'react';
import s from './TeamMembers.module.scss';
import Twitter from '../../../assets/icons/Twitter.svg';
import Instagram from '../../../assets/icons/Instagram.svg';
import Linkedin from '../../../assets/icons/Linkedin.svg';
import Facebook from '../../../assets/icons/Facebook.svg';
import Person1 from '../../../assets/img/Person1.svg';
import Person2 from '../../../assets/img/Person2.svg';
import Person3 from '../../../assets/img/Person3.svg';
import Person4 from '../../../assets/img/Person4.svg';
import TeamSlide1 from './Slides/TeamSlide1/TeamSlide1';
import TeamSlide2 from './Slides/TeamSlide2/TeamSlide2';

const TeamMembers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<TeamSlide1 />, <TeamSlide2 />];

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [slides.length]);

  return (
    <section className={s.section} id="Team">
      <h5 className={s.title}>Our Team Members</h5>
      <p className={s.subtitle}>
        Intellectero has united the most skilled and experienced specialists to
        provide you with quality and useful services.
      </p>
      <div className={s.persons}>
        <div className={s.line1}>
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
        <div className={s.line2}>
        <div className={s.personsItem}>
          <img src={Person3} alt="personPhoto" className={s.personPhoto} />
          <p className={s.name}>Ilyas Timaev</p>
          <span className={s.description}>Backend developed</span>
        </div>
        <div className={s.personsItem}>
          <img src={Person4} alt="personPhoto" className={s.personPhoto} />
          <p className={s.name}>Mairbek Zaitov</p>
          <span className={s.description}>Front-end developed</span>
        </div>
        </div>
      </div>
      <div className={s.slider}>
        <div
          className={s.slides}
          style={{ transform: `translateX(-${currentSlide * 51.5}%)` }}>
          {slides.map((slide, index) => (
            <div className={s.slide} key={index}>
              {slide}
            </div>
          ))}
        </div>
        <div className={s.navigation}>
          {slides.map((slide, index) => (
            <label
              data-number={index + 1}
              className={`${s.bar} ${index === currentSlide ? s.active : ''}`}
              key={index}></label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
