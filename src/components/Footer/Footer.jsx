import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Footer.module.scss';
import Logo from '../../assets/icons/WhiteLogo.svg';
import Facebook from '../../assets/icons/WhiteFacebook.svg';
import Twitter from '../../assets/icons/WhiteTwitter.svg';
import Linkedin from '../../assets/icons/WhiteLinkedin.svg';
import MapPoint from '../../assets/icons/WhiteMapPoint.svg';
import Letter from '../../assets/icons/Letter.svg';

const Footer = ({ activeItem, setActiveItem, activeServicesList, setActiveServicesList }) => { 

  const menuList = ['Home', 'About us', 'Services', 'Projects', 'Team'];
  
  const servicesList = [
    'Blockchain support',
    'Artificial Intelligence',
    'Payments integration',
    'Developing',
    'NFTs'
  ]

  const navigate = useNavigate();

  return (
    <footer className={s.footer}>
      <div className={s.box}>
        <div className={s.line1}>
          <div className={s.firstBlock}>
            <img src={Logo} alt="logo" className={s.logo} />
            <p className={s.description}>
              Meet with Intellectero, the FinTech, Blockchain, DeFi and NFT
              Development Company
            </p>
            <div className={s.icons}>
              <img src={Facebook} alt="facebook" />
              <img src={Twitter} alt="" />
              <img src={Linkedin} alt="" />
            </div>
          </div>
          <div className={s.secondBlock}>
            <p className={s.titles}>Menu</p>
            <ul className={s.menuList}>
              {menuList.map((item) => (
                <a
                  href={`#${item}`}
                  className={activeItem === item ? s.active : s.menuItem}
                  onClick={() => {
                    setActiveItem(item);
                    navigate('/');
                  }}>
                  {item}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.line2}>
          <div className={s.thirdBlock}>
            <p className={s.titles}>Services</p>
            <div className={s.servicesList}>
              {/* <li>Blockchain support</li>
              <li>Artificial Intelligence</li>
              <li>Payments integration</li>
              <li>Developing</li>
              <li>NFTs</li> */}
  
                {servicesList.map((item) => (
                  <a
                    href={'#Projects'}
                    className={activeServicesList === item ? s.active : s.menuItem}
                    onClick={() => {
                      setActiveServicesList(item);
                      navigate('/');
                    }}>
                    {item}
                  </a>
                ))}
              
            </div>
          </div>
          <div className={s.fourthBlock}>
            <p className={s.titles}>Contacts</p>
            <div className={s.mapPoint}>
              <img src={MapPoint} alt="Map" />
              <span>
                IOSB MAH.GIY. SANAT. 1A Block SK.GIY.SNAT.TIC. MER.1A 1A/!B023,
                Istanbul, Turkey
              </span>
            </div>
            <div className={s.emailsBlock}>
              <img src={Letter} alt="e-mail" />
              <div className={s.emails}>
                <span>info@intellectero.com</span>
                <span>support@intellectero.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.fourthBlock2}>
        <p className={s.titles}>Contacts</p>
        <div className={s.mapPoint}>
          <img src={MapPoint} alt="Map" />
          <span>
            IOSB MAH.GIY. SANAT. 1A Block SK.GIY.SNAT.TIC. MER.1A 1A/!B023,
            Istanbul, Turkey
          </span>
        </div>
        <div className={s.emailsBlock}>
          <img src={Letter} alt="e-mail" />
          <div className={s.emails}>
            <span>info@intellectero.com</span>
            <span>support@intellectero.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
