import { useState } from 'react'
import s from './Portfolio.module.scss'
import Portfolio1 from '../../../assets/img/Portfolio1.svg'
import SemiSquare1 from '../../../assets/icons/SemiSquare1.svg'
import SemiSquare2 from '../../../assets/icons/SemiSquare2.svg'
import SemiSquare3 from '../../../assets/icons/SemiSquare3.svg'
import SemiSquare4 from '../../../assets/icons/SemiSquare4.svg'
import FirstCard from './Cards/FirstCard/FirstCard'
import SecondCard from './Cards/SecondCard/SecondCard'
import ThirdCard from './Cards/ThirdCard/ThirdCard'

const Portfolio = () => {
    const [activeItem, setActiveItem] = useState('All');

    const handleItemClick = (item) => {
        setActiveItem(item);
      };

    const itemList = [
        'All', 'Blockchain support', 'Artificial Intelligence',
        'Payments integration', 'Developing', 'NFTs'
    ]

  return (
   <section className={s.section}>
        <h5 className={s.title}>Our Portfolio</h5>
        <p className={s.description}>
            Explore our cases and projects we have worked with. Amoung our clients are famous companies, eminent projects and start-ups.
        </p>
        <div className={s.list}>
            {itemList.map((item, index) => (
            <div
                key={index}
                className={activeItem === item ? `${s.active}`: `${s.notActive}`}
                onClick={() => handleItemClick(item)}
            >
            {item}
            </div>        
            ))}
        </div>
        <div className={s.importantBox}>
        <div className={s.box}>
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </div>
        </div>
   </section>
  )
}

export default Portfolio;