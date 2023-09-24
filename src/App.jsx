import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Layout from './Layout';
import Table from './components/Table/Table.jsx';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeServicesList, setActiveServicesList] = useState('All');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout 
            menuActive={menuActive} 
            setMenuActive={setMenuActive}
            activeServicesList={activeServicesList}
            setActiveServicesList={setActiveServicesList}
          />
        }>
        <Route
          index
          element={
            <Main
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              activeServicesList={activeServicesList}
              setActiveServicesList={setActiveServicesList}
            />
          }
        />
        <Route
          path="Prices"
          element={
            <Table
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
