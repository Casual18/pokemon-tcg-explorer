import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Favorites from './components/Favorites';
import CountryInfo from './components/CountryInfo';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
    </Router>
  );
}

export default App;