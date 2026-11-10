
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
  return (
    <div className='container-fluid'>
    <nav className="navbar navbar-inverse">
      <ul className="nav-links me-auto mb-2 mb-lg-0">
        <li><a href="/">Home</a></li>
        <li><a href="/how-to-play">How To Play</a></li>
        
      </ul>
    </nav>
    </div>
  );
}
     

export default NavBar;