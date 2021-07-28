import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { useParams } from "react-router-dom";
import CardProducts from "../components/CardProducts";

function ProductDetails() {
  const [state, setState] = useState({
    name: "",
    description: "",
    size: "",
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await api.get(`/productDetails/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchDetails();
  }, []);

  return (
    <div>
      <CardProducts
        name={state.name}
        description={state.description}
        size={state.size}
      />
    </div>
  );
}

export default ProductDetails;
