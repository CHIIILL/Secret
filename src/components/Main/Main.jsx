import React from 'react';
import Title from './Title/Title';
import Statistics from './Statistics/Statistics';
import WhyChoose from './WhyChoose/WhyChoose';
import AboutUs from './AboutUs/AboutUs';
import OurServices from './OurServices/OurServices';
import Partners from './Partners/Partners';
import Info from './Info/Info';
import TeamMembers from './Team/TeamMembers';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import SideBar from '../SideBar/SideBar.jsx';

const Main = ({ setMenuActive, menuActive, activeItem, setActiveItem, activeServicesList, setActiveServicesList }) => {
  return (
    <main>
      <Title />
      <Statistics />
      <WhyChoose />
      <AboutUs />
      <OurServices />
      <Partners />
      <Portfolio 
        activeServicesList={activeServicesList}
        setActiveServicesList={setActiveServicesList}
      />
      <Info />
      <TeamMembers />
      <Contacts />
      <SideBar
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </main>
  );
};

export default Main;
