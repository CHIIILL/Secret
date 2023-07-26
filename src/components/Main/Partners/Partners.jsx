import React from 'react'
import s from './Partners.module.scss'
import Partners1 from '../../../assets/icons/Partners1.svg'
import Partners2 from '../../../assets/icons/Partners2.svg'
import Partners3 from '../../../assets/icons/Partners3.svg'
import Partners4 from '../../../assets/icons/Partners4.svg'
import Partners5 from '../../../assets/icons/Partners5.svg'
import Partners6 from '../../../assets/icons/Partners6.svg'
import Partners7 from '../../../assets/icons/Partners7.svg'
import Partners8 from '../../../assets/icons/Partners8.svg'
import Partners9 from '../../../assets/icons/Partners9.svg'

const Partners = () => {
  return (
    <section className={s.section}>
        <div className={s.box}>
            <span className={s.title}>&#47;&#47;Our Partners</span>
            <p className={s.subtitle}>Intellectero has worked with:</p>
        </div>
        <div className={s.icons}>
            <div className={s.iconsLine}>
                <a href=""><img src={Partners1} alt="partner" /></a>
                <img src={Partners2} alt="partner" />
                <img src={Partners3} alt="partner" />
                <img src={Partners4} alt="partner" />
                <img src={Partners5} alt="partner" />
            </div>
            <div className={s.iconsLine}>
                <img src={Partners6} alt="partner" />
                <img src={Partners7} alt="partner" />
                <img src={Partners8} alt="partner" />
                <img src={Partners9} alt="partner" />
            </div>
        </div>
    </section>
  )
}

export default Partners;