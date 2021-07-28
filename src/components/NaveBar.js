import "./App.css";

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {

  
    return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <div className="d-flex justify-content-end">
    <Navbar.Brand href="/"  >  <i class="fas fa-shopping-cart"></i></Navbar.Brand>
  
<div>
    <NavDropdown title={<i class="fas fa-shopping-cart"></i>} id="navbarScrollingDropdown">
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
</div>

</div>



  </Container>
</Navbar>

    );


  }


export default NavBar