import React, { useState, useEffect } from "react";
import api from "../apis/api";
import CardProducts from "../components/CardProducts";

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
          <CardProducts
            name={elem.name}
            size={elem.size}
            description={elem.description}
          />
        );
      })}
    </div>
  );
}

export default AllProduct;
