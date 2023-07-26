import React from 'react'
import s from './Statistics.module.scss'
import Plus from '../../../assets/icons/Plus.svg'

const Statistics = () => {
  return (
    <section className={s.section}>
        <div className={s.card}>
            <div className={s.num}>
                <span className={s.numItem}>50</span>
                <div className={s.plus}>
                    <img src={Plus} alt="+" />
                </div>
            </div>
            <p className={s.title}>Completed projects</p>
        </div>
        <div className={s.card}>
            <div className={s.num}>
                <span className={s.numItem}>32</span>
                <div className={s.plus}>
                    <img src={Plus} alt="+" />
                </div>
            </div>
            <p className={s.title}>Satisfied costumers</p>
        </div>
        <div className={s.card}>
            <div className={s.num}>
                <span className={s.numItem}>20</span>
                <div className={s.plus}>
                    <img src={Plus} alt="+" />
                </div>
            </div>
            <p className={s.title}>Team members</p>
        </div>
        <div className={s.card}>
            <div className={s.num}>
                <span className={s.numItem}>15</span>
                <div className={s.plus}>
                    <img src={Plus} alt="+" />
                </div>
            </div>
            <p className={s.title}>Years experience</p>
        </div>
    </section>
  )
}

export default Statistics;