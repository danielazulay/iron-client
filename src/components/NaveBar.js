import "./App.css";
import {Link } from 'react-router-dom'

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function NaveBar() {
  const history = useHistory();
  const tokenKey = 'loggedInUser';
  const locationRoute = useLocation();
  const storage = localStorage.getItem(tokenKey);

  const [token, setToken] = useState(storage);

  useEffect(() => {
    setToken(localStorage.getItem(tokenKey));
  },[locationRoute.pathname]);

  const handlerLogout = () => {
    localStorage.removeItem(tokenKey);
    setToken('');
    history.push('/')

  };
  return (


   <Navbar collapseOnSelect expand="lg" bg="dark" variant="blue" >
      <Container>
      <NavDropdown align="start"  title="Menu" id="collasible-nav-dropdown" style={{ textDecoration:"none"}} >  
           { 
             !token &&     <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item> 
            }
            { 
              !token && <NavDropdown.Item as={Link} to="/signup">Cadastre-se</NavDropdown.Item> 
            }
            <NavDropdown.Item as={Link} to="/">Todos os Produtos</NavDropdown.Item> 
            { 
              token &&  <NavDropdown.Item as={Link} to="/profile">Minha Conta</NavDropdown.Item> 
            }
            { 
              token && <NavDropdown.Item as={Link} to="/newProduct">Novo Produto</NavDropdown.Item> 
            }
            
            { 
              token && <NavDropdown.Item > <button className="btn btn-outline-success my-2 my-sm-0" type="button"  onClick={handlerLogout}>
      sair
 
  </button>
              
             </NavDropdown.Item>
            }
      
             
            
              
           
           <NavDropdown.Divider /> 
           <NavDropdown.Item href="/AboutUs">About Us</NavDropdown.Item> 
        </NavDropdown> 
        <Navbar.Brand as={Link} to="/" >Iron Beer <i class="fas fa-beer"></i></Navbar.Brand>
        
        
          
        <div className="d-flex justify-content-end ">
          <Link to="/checkout"><Navbar.Brand  >  <i className="fas fa-shopping-cart" ></i></Navbar.Brand></Link> 
       </div>
      </Container> 
    </Navbar> 
  )
}

export default NaveBar;



