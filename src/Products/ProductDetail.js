import React, { useEffect, useState, useContext } from "react";
import api from "../apis/api";
import { useParams } from "react-router-dom";
import CardProducts from "../components/CardProducts";
import { CartContext } from "../contexts/cartContext"


function ProductDetails() {
  const [state, setState] = useState({
    name: "",
    description: "",
    size: "",
    price: "",
    id:""
  });

  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await api.get(`/productDetails/${id}`);
console.log(response)
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchDetails();
  }, [id]);

  return (
    <div>
      <CardProducts
      id={state._id}
        name={state.name}
        description={state.description}
        size={state.size}
        price={state.price}
      />
      <div className="form-group d-inline-block mr-3">
          <label htmlFor="productDetailQuantity">Quantidade: </label>
          <input
            type="number"
            id="productDetailQuantity"
            className="form-control"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))
           }
          />
            </div>
<button type="button" className="btn btn-secondary" onClick={()=>{
console.log(quantity,id,cart)
setCart([...cart, { qtt: quantity, productId: id}])

}}>Add to the cart</button>
    </div>
  );
}

export default ProductDetails;
