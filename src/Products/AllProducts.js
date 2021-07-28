import React, { useState, useEffect } from "react";
import api from "../apis/api";
import CardProducts from "../components/CardProducts";
import { Link } from 'react-router-dom'
function AllProduct() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get("/getAllProducts");
        console.log(response.data);

        setState([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div>
      {state.map((elem) => {
        return (
          <Link  to={`/productDetails/${elem._id}`} className="allProduct" style={{ maxWidth: "540px" }}>
          <CardProducts
          id={elem._id}
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

export default AllProduct;
