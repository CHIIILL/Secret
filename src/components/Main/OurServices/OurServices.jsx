import React from 'react'
import s from './OurServices.module.scss'
import Stick from '../../../assets/img/Stick.svg'
import Service1 from '../../../assets/icons/Service1.svg'
import Service2 from '../../../assets/icons/Service2.svg'
import Service3 from '../../../assets/icons/Service3.svg'

const OurServices = () => {
  return (
    <section className={s.section}>
        <div className={s.box}>
            <p className={s.description}>
                Our goal is to implement client`s ideas, provide them with quality products and help them to enter the web.Create your own cryptocurrency, token, wallet, exchange or dApp with us! 
            </p>
            <img src={Stick} alt="stick"/>
            <div className={s.titleBox}>
                <p className={s.title}>&#47;&#47;Our Services</p>
                <p className={s.subtitle}>
                    Discover our Offering and Find a Solution
                </p>
            </div>
        </div>
        <div className={s.cards}>
            <div className={s.cardsItem}>
                <img src={Service1} alt="" />
                <p className={s.cardTitle}>Blockchain Development</p>
                <p className={s.cardDescription}>
                    Creation of Blockchain Turnkay Project. The blockchain, developed by Intellectero, is secure and anonymous, complying with all industry  standards.
                </p>
            </div>
            <div className={s.cardsItem}>
                <img src={Service2} alt="" />
                <p className={s.cardTitle}>NFT Collection Launch </p>
                <p className={s.cardDescription}>
                    Enter the crypto world with your own NFT collection! Intellectero will help to develop and launch your NFTs using uniqe smart contracts, remarkable design and leading technologies.
                </p>
            </div>
            <div className={s.cardsItem}>
                <img src={Service3} alt="" />
                <p className={s.cardTitle}>FinTech Solution</p>
                <p className={s.cardDescription}>
                    Enter the web with Intellectero to provide your clients with innovative services and gain more customers. We will provide you with technological financial solutions for the automation and transformation of your project.
                </p>
            </div>
            <div className={s.cardsItem}>
                <img src={Service1} alt="" />
                <p className={s.cardTitle}>Big Data Solution</p>
                <p className={s.cardDescription}>
                    Can`t deal with a huge amount of data? Intellectero will help you to manage the processes with ease and pleasure! Get hight-load infastructure solution for your project
                </p>
            </div>
        </div>
    </section>
  )
}

export default OurServices;