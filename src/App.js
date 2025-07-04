
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Recherche from './Recherche';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


const Page404 = () => {

};

const Accueil = () => {

};



  return (
    <div>
      <h1>Bienvenue dans le site pour trouver votre alcool</h1>
      <p>Total Drinks: 636, Total ingredients: 489</p>

      <Recherche onPropagateToParent={accesAPI} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && result.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Résultat :</h2>
          {result.map((item) => (
            <p key={item.idDrink}>
              {item.strDrink} |{' '}
              <img src={item.strDrinkThumb} alt={item.strDrink} width="50" /> | ID: {item.idDrink}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Menu</h2>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'lien-actif' : '')}
                style={({ isActive }) => (isActive ? { color: 'red', fontWeight: 'bold' } : undefined)}
              >
                Accueil
              </NavLink>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;