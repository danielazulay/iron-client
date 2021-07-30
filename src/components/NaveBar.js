import "./App.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";


function NaveBar() {
  const tokenKey = 'loggedInUser';
  const { loggedInUser } = useContext(AuthContext);
  const locationRoute = useLocation();
  const storage = localStorage.getItem(tokenKey);

  const [token, setToken] = useState(storage);

  useEffect(() => {
    setToken(localStorage.getItem(tokenKey));
  },[locationRoute.pathname]);

  const handlerLogout = () => {
    localStorage.removeItem(tokenKey);
    setToken('');
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/">Iron Beer</Navbar.Brand>
        <div className="d-flex justify-content-end ">
          <Link to="/CheckOut">
            {" "}
            <Navbar.Brand>
              {" "}
              <i className="fas fa-shopping-cart"></i>
            </Navbar.Brand>
          </Link>

          <NavDropdown
            align="end"
            title={<i className="fas fa-bars"></i>}
            id="navbarScrollingDropdown"
          >
            <Link to="/">
              {" "}
              <NavDropdown.Item>Home</NavDropdown.Item>
            </Link>

            {loggedInUser.user._id ? (
              <></>
            ) : (
              <Link to="/login">
                {" "}
                <NavDropdown.Item>Login</NavDropdown.Item>
              </Link>
            )}

            {loggedInUser.user._id ? (
              <></>
            ) : (
              <Link to="/signup">
                {" "}
                <NavDropdown.Item>Sign Up</NavDropdown.Item>
              </Link>
            )}

            {loggedInUser.user._id ? (
              <Link to="/profile">
                {" "}
                <NavDropdown.Item>Account User</NavDropdown.Item>
              </Link>
            ) : (
              <></>
            )}

            {loggedInUser.user._id ? (
              <Link to="/new-product">
                {" "}
                <NavDropdown.Item>new Product</NavDropdown.Item>
              </Link>
            ) : (
              <></>
            )}       
          
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default NaveBar;



