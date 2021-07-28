import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextComponent } from "../contexts/authContext";
// import ProtectedRoute from "../routerComponents/auth/PrivateRouter";

import Signup from "../routerComponents/auth/Signup";
import Profile from "../routerComponents/auth/Profile";
import Login from "../routerComponents/auth/Login";
import Product from "./Product";
import AllProduct from "../Products/AllProducts";
import ResultSearch from "../components/ResultSearch";
import RouterSearch from "../components/RouterSearch";
import NaveBar from "../components/NaveBar";
import ProductDetails from "../Products/ProductDetail";
import EditProducts from "./EditProducts";
import DeleteProduct from "./DeleteProduct"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextComponent>
        
          <div className="container mt-3">
            <NaveBar />
            <Route component={RouterSearch} />
            <Route path="/result-search/:name" component={ResultSearch} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/new-product" component={Product} />
  
          
            <Route path="/all-products" component={AllProduct} />
            <Route path="/product-details/:id" component={ProductDetails} />
            <Route path="/edit-product/:id" component={EditProducts} />
            <Route path="/delete-product/:id" component={DeleteProduct} />
          </div>
        </AuthContextComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
