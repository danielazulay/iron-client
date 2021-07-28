import "./App.css";
import { useHistory} from "react-router-dom";

function Search(props) {


     const history = useHistory()
  
    return (
        <div>

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">

    <form className="d-flex"  > 
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.products.name} name="name" onChange={props.handleChange}/>
      <button className="btn btn-outline-success" type="submit" onClick={(event)=>{event.preventDefault()
        history.push(`/result-search/${props.products.name}`)}}>Search</button>
    </form>
  </div>
</nav>
</div>

    )
  }


export default Search