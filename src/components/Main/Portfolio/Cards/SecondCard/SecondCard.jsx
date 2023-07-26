import React from 'react'
import s from './SecondCard.module.scss'
import Portfolio2 from '../../../../../assets/img/Portfolio2.svg'
import SemiSquare1 from '../../../../../assets/icons/SemiSquare1.svg'
import SemiSquare2 from '../../../../../assets/icons/SemiSquare2.svg'
import SemiSquare3 from '../../../../../assets/icons/SemiSquare3.svg'
import SemiSquare4 from '../../../../../assets/icons/SemiSquare4.svg'

const SecondCard = () => {
  return (
    <div className={s.cardsContainer}>
            <div className={s.image}>
                <img src={Portfolio2} alt="img" />
            </div>
            <div className={s.hoverContainer}>
                <div className={s.semiSquareTop}>
                    <img src={SemiSquare1} alt="SemiSquare" />
                    <img src={SemiSquare2} alt="SemiSquare" />
                </div>
                <div className={s.hoverText}>
                    <span className={s.hoverTitle}>BitOnyx</span>
                    <p className={s.hoverSubtitle}>Crypto AI trading platform</p>
                </div>
                <div className={s.semiSquareBottom}>
                    <img src={SemiSquare3} alt="SemiSquare" />
                    <img src={SemiSquare4} alt="SemiSquare" />
                </div>
            </div>
        </div>
  )
}

export default SecondCard;