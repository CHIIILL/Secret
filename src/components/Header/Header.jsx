import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import s from './Header.module.scss';
import Logo from '../../assets/icons/Logo.svg';
import Letter from '../../assets/icons/Letter.svg';
import Burger from '../../assets/icons/Burger.svg';

const Header = ({ setMenuActive, activeItem, setActiveItem }) => {
  /* const [isFixed, setIsFixed] = useState(false); */

  /* const handleScroll = () => {
    const offset = 20;

    if (window.scrollY > 200 + offset) {
      setIsFixed(true); 

    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const itemsList = [
    'Home',
    'About us',
    'Services',
    'Projects',
    'Team',
    'Prices',
  ];
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className={
        pathname === '/Prices'
          ? `${s.header} ${s.fixed}`
          : `${s.header} ${s.bgLine}`
      }>
      <div className={s.box}>
        <nav className={s.nav}>
          <button className={`${s.btn} ${s.btnTablet}`}>
            <img src={Letter} alt="letter" className={s.none} />
            <span>Contact us</span>
          </button>
          <img src={Logo} alt="Logo" className={s.logo} />
          <ul className={s.list}>
            {itemsList.map((item) => {
              if (item === 'Prices')
                return (
                  <NavLink
                    to={'Prices'}
                    className={activeItem === item ? s.active : s.listItem}
                    onClick={(e) => handleItemClick(item)}>
                    {item}
                  </NavLink>
                );
              return (
                <a
                  href={`#${item}`}
                  className={activeItem === item ? s.active : s.listItem}
                  onClick={() => {
                    handleItemClick(item);
                    navigate('/');
                  }}>
                  {item}
                </a>
              );
            })}
          </ul>
          <img
            src={Burger}
            alt="menu"
            className={s.burger}
            onClick={() => setMenuActive(true)}
          />
        </nav>
        <button className={`${s.btnBrowser} ${s.btn}`}>
          <img src={Letter} alt="letter" />
          <span>Contact us</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
