import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <nav className="navbar navbar-inverse">
    <div container-fluid>
      <Nav className="navbar-brand">
        Pokemon TCG Cards Explorer
      </Nav>
    </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/favorites">Favorites</a></li>
      </ul>
    </nav>
  );
}
     

export default NavBar;