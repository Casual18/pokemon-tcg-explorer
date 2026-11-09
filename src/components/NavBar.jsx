import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/favorites">Favorites</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;