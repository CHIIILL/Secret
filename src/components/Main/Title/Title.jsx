import React from 'react'
import s from './Title.module.scss'
import DecorImg from '../../../assets/img/DecorImg.svg'
import PlayBtn from '../../../assets/icons/PlayBtn.svg'
import FaceBook from '../../../assets/icons/Facebook.svg'
import Twitter from '../../../assets/icons/Twitter.svg'
import Linkedin from '../../../assets/icons/Linkedin.svg'

const Title = () => {
  return (
    <section className={s.section}>
        <div className={s.box}>
            <h1 className={s.title}>Intellectero</h1>
            <h2 className={s.subtitle}>
                Developing FinTech,Blockchain,<br/>
                DeFi and NFT Projects 
            </h2>
            <p className={s.text}>
                Get the ready made projects on a turnkay basis.Develop your idea with Intellectero from scratch. Enjoy quality and unique products.
            </p>
            <div className={s.btns}>
                <button className={s.aboutBtn}>About us</button>
                <button className={s.watchBtn}>
                    <img src={PlayBtn} alt="PlayBtn" />
                    Watch the Portfolio
                </button>
            </div>
            <div className={s.socialNetworks}>
                <span>Visit our social networks:</span>
                <div className={s.icons}>
                    <img src={FaceBook} alt="FaceBook" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Linkedin} alt="Linkedin" />
                </div>
            </div>
        </div>
        <div className={s.decorImg}>
            <img src={DecorImg} alt="" />
        </div>
    </section>
  )
}

export default Title;