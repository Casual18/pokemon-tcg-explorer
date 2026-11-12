
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HowToPlay from './components/HowToPlay';
import CardInfo from './components/CardInfo';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/card/:id" element={<CardInfo />} />
      </Routes>
    </Router>
  );
}

export default App;