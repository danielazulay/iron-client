import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProducts from "./CardProducts";
import api from "../apis/api";
import { Link } from 'react-router-dom'
function ResultSearch(props) {

  const [state, setState] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      try {       

        const response = await api.get(`/search?name=${name}`);

        setState([...response.data]);
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchProfile();
  }, [name]);

  return (
    <div>


      {state.map((elem) => {
        return (
          <Link  to={`/product-details/${elem._id}`} className="allProduct" style={{ maxWidth: "540px" }}>
          <CardProducts
          id={elem._id}
            name={elem.name}
           
            price={elem.price}
            description={elem.description}
            img={elem.img}
          />
                    </Link>
        );
      })}
    </div>
  );
}

export default ResultSearch;
