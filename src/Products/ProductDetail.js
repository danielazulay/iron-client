import React, { useEffect, useState, useContext } from "react";
import api from "../apis/api";
import { useParams, Link } from "react-router-dom";
import CardDetails from "../components//CardDetails";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";

function ProductDetails() {
  const [state, setState] = useState({
    userid: [],
    name: "",
    description: "",
    size: "",
    price: "",
    id:"",
    img: ""
  });
  const { loggedInUser} = useContext(AuthContext);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await api.get(`/productDetails/${id}`);
        console.log("eu sou o productDetails --> ", response);
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchDetails();
  }, [id]);
console.log(cart)
  return (
    <div>
      <CardDetails
      id={state._id}
      image={state.img}
        name={state.name}
        description={state.description}
        size={state.size}
        price={state.price}
        img={state.img}
      />
      <div className="form-group d-inline-block mr-3">
        <label htmlFor="productDetailQuantity">Quantity: </label>
        <input
          type="number"
          id="productDetailQuantity"
          className="form-control"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setCart([...cart, { qtt: quantity, productId: id }]);
        }}
      >
        Add 
      </button>

   

      
      <Link
          type="button"
          to={`/`}
          className="btn btn-secondary m-2"
        >
          Voltar
        </Link>

      {state.userid[0] === loggedInUser.user._id ? (
        <Link
          type="button"
          to={`/edit-product/${id}`}
       
        >
          <i class="fas fa-edit"></i>
        </Link>
      ) : (
        <></>
      )}
      {state.userid[0] === loggedInUser.user._id ? (
        <Link to={`/delete-product/${id}`}>
          <i className="far fa-trash-alt m-2"></i>
        </Link>
      ) : (
        <></>
      )}


    </div>
  );
}

export default ProductDetails;
