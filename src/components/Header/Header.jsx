import React from 'react'
import s from './Header.module.scss'
import Logo from '../../assets/icons/Logo.svg'
import Letter from '../../assets/icons/Letter.svg'

const Header = () => {
  return (
    <header className={s.header}>
        <nav className={s.nav}>
            <img src={Logo} alt="Logo" />
            <ul className={s.list}>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Prices</li>
            </ul>
        </nav>
        <button className={s.btn}>
            <img src={Letter} alt="letter" />
            <span>Contact us</span>
        </button>
    </header>
  )
}

export default Header;