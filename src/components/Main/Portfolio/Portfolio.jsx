import React from 'react';
import s from './Portfolio.module.scss';

import FirstCard from './Cards/FirstCard/FirstCard';
import ThirdCard from './Cards/ThirdCard/ThirdCard';
import SecondCard from './Cards/SecondCard/SecondCard';
import FourthCard from './Cards/FourthCard/FourthCard';
import FifthCard from './Cards/FifthCard/FifthCard';

const Portfolio = ( { activeServicesList, setActiveServicesList } ) => {

  const filter = (state) => {
    if (state === 'All') {
      return (
        <>
          <div className={s.box}>
            <div className={s.line}>
              <FirstCard />
              <SecondCard />
            </div>
            <ThirdCard />
            <div className={s.line}>
              <FourthCard />
              <FifthCard />
            </div>
          </div>
          <div className={s.boxPhone}>
            <div className={s.linePhone}>
              <FirstCard />
              <SecondCard />
            </div>
            <div className={s.linePhone}>
              <ThirdCard />
              <FourthCard />
            </div>
            <FifthCard />
          </div>
        </>
      );
    }
    if (state === 'Blockchain support') {
      return (
        <div className={s.box2}>
          <ThirdCard />
        </div>
      );
    }
    if (state === 'Artificial Intelligence') {
      return (
        <div className={s.box2}>
          <SecondCard />
        </div>
      );
    }
    if (state === 'Payments integration') {
      return (
        <div className={s.box2}>
          <FourthCard />
        </div>
      );
    }
    if (state === 'Developing') {
      return (
        <>
          <div className={s.box3}>
            <FirstCard />
            <SecondCard />
            <FifthCard />
          </div>
          <div className={s.boxPhone2}>
            <div className={s.linePhone}>
              <FirstCard />
              <SecondCard />
            </div>
            <FifthCard />
          </div>
        </>
      );
    }
    if (state === 'NFTs') {
      return <div className={s.box4}></div>;
    }
  };

  const itemList = [
    'All',
    'Blockchain support',
    'Artificial Intelligence',
    'Payments integration',
    'Developing',
    'NFTs',
  ];

  return (
    <section className={s.section} id="Projects">
      <h5 className={s.title}>Our Portfolio</h5>
      <p className={s.description}>
        Explore our cases and projects we have worked with. Amoung our clients
        are famous companies, eminent projects and start-ups.
      </p>
      <div className={s.container}>
        <div className={s.list}>
          {itemList.map((item, index) => (
            <div
              key={index}
              className={activeServicesList === item ? s.active : s.notActive}
              onClick={() => setActiveServicesList(item)}>
              {item}
            </div>
          ))}
        </div>
        {filter(activeServicesList)}
      </div>
    </section>
  );
};

export default Portfolio;
