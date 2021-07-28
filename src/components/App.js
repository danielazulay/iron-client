import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextComponent } from "../contexts/authContext";
// import ProtectedRoute from "../../routerComponents/auth/PrivateRouter";


import Signup from "../routerComponents/auth/Signup";
import Profile from "../routerComponents/auth/Profile";
import Login from "../routerComponents/auth/Login";
import AllProduct from "../Products/AllProducts";
import ResultSearch from "../components/ResultSearch"
import RouterSearch from "../components/RouterSearch"
import NaveBar from "../components/NaveBar"
import ProductDetails from "../Products/ProductDetail";


function App() {
  return (
    <BrowserRouter>
        <Switch>
    <AuthContextComponent>
  
      <NaveBar/>
   
      <Route component={RouterSearch} />
          <div className="container mt-5">
      
          <Route path="/result-search/:name" component={ResultSearch} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={AllProduct} />
            <Route path="/productDetails/:id" component={ProductDetails} />
          </div>
        

      </AuthContextComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
