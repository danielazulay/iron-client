import "./App.css";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { AuthContext } from "../contexts/authContext";

function NavBar() {
  const { loggedInUser, logoff } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Iron Beer</Navbar.Brand>
        <div className="d-flex justify-content-end ">
          <Navbar.Brand href="/">
            {" "}
            <i className="fas fa-shopping-cart"></i>
          </Navbar.Brand>

          <NavDropdown
            align="end"
            title={<i className="fas fa-bars"></i>}
            id="navbarScrollingDropdown"
          >
            {loggedInUser.user._id ? (
              <></>
            ) : (
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            )}

            {loggedInUser.user._id ? (
              <></>
            ) : (
              <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
            )}

            {loggedInUser.user._id ? (
              <NavDropdown.Item href="/profile">Account User</NavDropdown.Item>
            ) : (
              <></>
            )}

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
