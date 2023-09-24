import { useState, useEffect } from 'react';
import s from './OurServices.module.scss';
import Stick from '../../../assets/img/Stick.svg';
import Service1 from '../../../assets/icons/Service1.svg';
import Service2 from '../../../assets/icons/Service2.svg';
import Service3 from '../../../assets/icons/Service3.svg';
import SlideServices1 from './Slides/SlideServices1/SlideServices1';
import SlideServices2 from './Slides/SlideServices2/SlideServices2';

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<SlideServices1 />, <SlideServices2 />];

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [slides.length]);

  return (
    <section className={s.section} id="Services">
      <div className={s.box}>
        <p className={s.description}>
          Our goal is to implement client`s ideas, provide them with quality
          products and help them to enter the web.Create your own
          cryptocurrency, token, wallet, exchange or dApp with us!
        </p>
        <img src={Stick} alt="stick" />
        <div>
          <p className={s.title}>&#47;&#47;Our Services</p>
          <p className={s.subtitle}>
            Discover our Offering and Find a Solution
          </p>
        </div>
      </div>
      <div className={s.cards}>
        <div className={s.cardsItem}>
          <img src={Service1} alt="" />
          <p className={s.cardTitle}>Big Data Solution</p>
          <p className={s.cardDescription}>
            Can`t deal with a huge amount of data? Intellectero will help you to
            manage the processes with ease and pleasure! Get hight-load
            infastructure solution for your project
          </p>
        </div>
        <div className={s.cardsItem}>
          <img src={Service2} alt="" />
          <p className={s.cardTitle}>Big Data Solution</p>
          <p className={s.cardDescription}>
            Can`t deal with a huge amount of data? Intellectero will help you to
            manage the processes with ease and pleasure! Get hight-load
            infastructure solution for your project
          </p>
        </div>
        <div className={s.cardsItem}>
          <img src={Service3} alt="" />
          <p className={s.cardTitle}>Big Data Solution</p>
          <p className={s.cardDescription}>
            Can`t deal with a huge amount of data? Intellectero will help you to
            manage the processes with ease and pleasure! Get hight-load
            infastructure solution for your project
          </p>
        </div>
        <div className={s.cardsItem}>
          <img src={Service1} alt="" />
          <p className={s.cardTitle}>Big Data Solution</p>
          <p className={s.cardDescription}>
            Can`t deal with a huge amount of data? Intellectero will help you to
            manage the processes with ease and pleasure! Get hight-load
            infastructure solution for your project
          </p>
        </div>
      </div>
      <div className={s.slider}>
        <div
          className={s.slides}
          style={{ transform: `translateX(-${currentSlide * 46}%)` }}>
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

export default OurServices;
