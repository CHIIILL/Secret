import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Layout = ({ menuActive, setMenuActive, activeServicesList, setActiveServicesList}) => {
  const [activeItem, setActiveItem] = useState(null);


  return (
    <>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Outlet />
      <Footer 
        activeItem={activeItem}
        setActiveItem={setActiveItem} 
        activeServicesList={activeServicesList}
        setActiveServicesList={setActiveServicesList}
      />
    </>
  );
};

export default Layout;
