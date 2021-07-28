import "./App.css";



import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


function NavBar() {

  
    return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/signup">Sign Up</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
    
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

    );


  }


export default NavBar