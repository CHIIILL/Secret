import React from 'react'
import s from './WhyChoose.module.scss'
import WhyChoose1 from '../../../assets/icons/WhyChoose1.svg'
import WhyChoose2 from '../../../assets/icons/WhyChoose2.svg'
import WhyChoose3 from '../../../assets/icons/WhyChoose3.svg'

const WhyChoose = () => {
  return (
    <section className={s.section}>
        <h3 className={s.title}>Why choose us?</h3>
        <p className={s.subtitle}>
            We can implement your idea into real life and provide you with a completely finished product that is ready for use.
        </p>
        <div className={s.cardsBox}>
            <div className={s.card}>
                <img src={WhyChoose1} alt="icon1" />
                <p className={s.cardTitle}>Who we are?</p>
                <p className={s.description}>
                    Intellectero is a full-strack development company that operates in FinTech, Defi, NTF and Blockchain industries.
                </p>
            </div>
            <div className={s.card}>
                <img src={WhyChoose2} alt="icon2" />
                <p className={s.cardTitle}>What we do?</p>
                <p className={s.description}>
                    Our goal is to implement client`s ideas, provide them with quality products and help them to enter the web.
                </p>
            </div>
            <div className={s.card}>
                <img src={WhyChoose3} alt="icon2" />
                <p className={s.cardTitle}>Why trust us?</p>
                <p className={s.description}>
                    We gathered the best specialists and now our team consists of more than 20 members.
                </p>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose;