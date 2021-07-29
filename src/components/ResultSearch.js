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
          <Link  to={`/productDetails/${elem._id}`} className="allProduct card mb-3" style={{ maxWidth: "540px" }}>
          <CardProducts
            name={elem.name}
            size={elem.size}
            description={elem.description}
          />
                    </Link>
        );
      })}
    </div>
  );
}

export default ResultSearch;
