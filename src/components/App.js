import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextComponent } from "../contexts/authContext";


import Signup from "../routerComponents/auth/Signup";
import Profile from "../routerComponents/auth/Profile";
import Login from "../routerComponents/auth/Login";
import Product from "./Product";
import AllProduct from "../Products/AllProducts";
import ResultSearch from "../components/ResultSearch";
import RouterSearch from "../components/RouterSearch";
import NaveBar from "../components/NaveBar";
import ProductDetails from "../Products/ProductDetail";
import { CartContextComponent } from "../contexts/cartContext"
import EditProducts from "./EditProducts";
import DeleteProduct from "./DeleteProduct"
import Checkout from "./CheckOut"
import EditeUser from "../routerComponents/account/EditeUser";
import About from "./Abaout";
import CardDetails from "./CardDetails"
function App() {
  return (
    <BrowserRouter>
     
     
        <AuthContextComponent>
        <CartContextComponent>
        <Switch>
          <div className="container mt-3">
       
            <NaveBar />
            <Route component={RouterSearch} />
            <Route path="/resultSearch/:name" component={ResultSearch} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            
            <Route path="/login" component={Login} />
            <Route path="/newProduct" component={Product} />
            <Route path="/editUser/:id" component={EditeUser} />
          
            <Route exact path="/" component={AllProduct} />
            <Route path="/productDetails/:id" component={ProductDetails} />
            <Route path="/edit-product/:id" component={EditProducts} />
            <Route path="/delete-product/:id" component={DeleteProduct} />
            <Route path="/CheckOut" component={Checkout} />
            <Route path="/About" component={About}/>
            <Route path="/CardDetails" component={CardDetails}/>
           
          </div>
          </Switch>
          </CartContextComponent>
        </AuthContextComponent>
  
    </BrowserRouter>
  );
}

export default App;
