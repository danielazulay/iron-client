import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthContextComponent } from "../contexts/authContext";
// import ProtectedRoute from "../../routerComponents/auth/PrivateRouter";
import ResultSearch from "./ResultSearch"
import RouterSearch from "./RouterSearch"
import NaveBar from "./NaveBar"
//import Cards from "./cards"


import Signup from "../routerComponents/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextComponent>
<NaveBar/>

<RouterSearch/>

          <div className="container mt-5">
          <Route path="/result-search/:name" component={ResultSearch} />
            <Route path="/signup" component={Signup} />
          </div>


        </AuthContextComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
