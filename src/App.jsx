import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Favorites from './components/Favorites';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
    </Router>
  );
}

export default App;