
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/how-to-play">How To Play</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
    

export default NavBar;