import React, { useEffect, useState, useContext } from "react";
import api from "../apis/api";
import { useParams, Link } from "react-router-dom";
import CardProducts from "../components/CardProducts";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";

function ProductDetails() {
  const [state, setState] = useState({
    userid: [],
    name: "",
    description: "",
    size: "",
    price: "",
    id: "",
    img: "",
  });
  const { loggedInUser, logoff } = useContext(AuthContext);
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

  return (
    <div>
      <CardProducts
        id={state._id}
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
        Add to the cart
      </button>

      {state.userid[0] === loggedInUser.user._id ? (
        <Link to={`/delete-product/${id}`}>
          <i className="far fa-trash-alt"></i>
        </Link>
      ) : (
        <></>
      )}

      {state.userid[0] === loggedInUser.user._id ? (
        <Link
          type="button"
          to={`/edit-product/${id}`}
          className="btn btn-primary"
        >
          Edite Product
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductDetails;
