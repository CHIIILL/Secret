import React from 'react'
import Title from './Title/Title'
import Statistics from './Statistics/Statistics';
import WhyChoose from './WhyChoose/WhyChoose';
import AboutUs from './AboutUs/AboutUs';
import OurServices from './OurServices/OurServices';
import Partners from './Partners/Partners';
import Info from './Info/Info';
import TeamMembers from './TeamMembers/TeamMembers';
import Portfolio from './Portfolio/Portfolio';


const Main = () => {
  return (
    <main>
        <Title />
        <Statistics />
        <WhyChoose />
        <AboutUs />
        <OurServices />
        <Partners />
        <Portfolio>
          
        </Portfolio>
        <Info />
        <TeamMembers />
    </main>
  )
}

export default Main;