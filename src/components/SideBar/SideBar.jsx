import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import s from './SideBar.module.scss';
import Cross from '../../assets/icons/Cross.svg';
import Logo from '../../assets/icons/WhiteLogo.svg';

const SideBar = ({ menuActive, setMenuActive, activeItem, setActiveItem }) => {
  const navigate = useNavigate();

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

  return (
    <div className={menuActive ? `${s.sideBar} ${s.active}` : s.sideBar}>
      <div className={s.content}>
        <div className={s.icons}>
          <img src={Cross} alt="cross" onClick={() => setMenuActive(false)} />
          <img src={Logo} alt="logo" />
        </div>
        <div className={s.list}>
          {itemsList.map((item) => {
            if (item === 'Prices')
              return (
                <NavLink
                  to={'Prices'}
                  className={activeItem === item ? s.active : s.notActive}
                  onClick={(e) => handleItemClick(item)}>
                  {item}
                </NavLink>
              );
            return (
              <a
                href={`#${item}`}
                className={activeItem === item ? s.active : s.notActive}
                onClick={() => {
                  handleItemClick(item);
                  navigate('/');
                }}>
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
