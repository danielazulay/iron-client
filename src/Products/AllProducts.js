import React, { useState, useEffect } from "react";
import api from "../apis/api";
import CardProducts from "../components/CardProducts";

function AllProduct() {
  const [state, setState] = useState({
    name: "",
  });

  useEffect(() => {
    async function FetchProduct() {
      try {
        const response = await api.get("/getAllProducts");
        console.log(response.data);
        
        setState({ ...response.data[0] })

      } catch (err) {
        console.log(err);
      }
    }
    FetchProduct();
  }, []);


  return ( 
    <div>

<h1>{state.name}</h1>

    </div>
  );
}

export default AllProduct;
