import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextComponent } from "../contexts/authContext";
// import ProtectedRoute from "../../routerComponents/auth/PrivateRouter";


import Signup from "../routerComponents/auth/Signup";
import Profile from "../routerComponents/auth/Profile";
import Login from "../routerComponents/auth/Login";
import Product from "./Product";
import AllProduct from "../Products/AllProducts";



function App() {
  return (
    <BrowserRouter>
    <AuthContextComponent>
      <Switch>

          <div className="container mt-5">
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/newProduct" component={Product} />
  
          
            <Route path="/getAllProducts" component={AllProduct} />
          </div>
        
      </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
