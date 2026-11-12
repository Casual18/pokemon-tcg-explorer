
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/how-to-play">How To Play</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
    

export default NavBar;