import React from 'react'
import s from './FirstCard.module.scss'
import Portfolio1 from '../../../../../assets/img/Portfolio1.svg'
import SemiSquare1 from '../../../../../assets/icons/SemiSquare1.svg'
import SemiSquare2 from '../../../../../assets/icons/SemiSquare2.svg'
import SemiSquare3 from '../../../../../assets/icons/SemiSquare3.svg'
import SemiSquare4 from '../../../../../assets/icons/SemiSquare4.svg'

const FirstCard = () => {
  return (
    <div className={s.cardsContainer}>
            <div className={s.image}>
                <img src={Portfolio1} alt="img" />
            </div>
            <div className={s.hoverContainer}>
                <div className={s.semiSquareTop}>
                    <img src={SemiSquare1} alt="SemiSquare" />
                    <img src={SemiSquare2} alt="SemiSquare" />
                </div>
                <div className={s.hoverText}>
                    <span className={s.hoverTitle}>Mobile app</span>
                    <p className={s.hoverSubtitle}>CryptoCoints Forecast</p>
                </div>
                <div className={s.semiSquareBottom}>
                    <img src={SemiSquare3} alt="SemiSquare" />
                    <img src={SemiSquare4} alt="SemiSquare" />
                </div>
            </div>
        </div>
  )
}

export default FirstCard;