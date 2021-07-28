import "./App.css";
import { useHistory} from "react-router-dom";

function Search(props) {

     
  
    return (
        <div>

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">

    <form className="d-flex"  > 
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.name} name="name" onChange={props.handleChange}/>
      <button className="btn btn-outline-success" type="submit" onClick={()=>{ useHistory.push(`/ResultSearch/${props.name}`)}}>Search</button>
    </form>
  </div>
</nav>
</div>

    )
  }


export default Search