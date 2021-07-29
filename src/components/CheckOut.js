import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";

import api from "../apis/api";

const stripePromise = loadStripe(
  "pk_test_51JIaznHTr9D5uUdXwbHXAUqFNQZR4HcVDVndsCbKjssoK9jvxXGnMMSfLrTgcRv8chAxcRpnSE7WUDRYBZoH6fnw00XUbBh54S"
);

function Checkout() {
  const { cart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const tempState = [];

      for (let productInCart of cart) {
        
        const response = await api.get(`/productDetails/${productInCart.productId}`);

        const { _id, img, price, name } = response.data;

        tempState.push({ _id, img, price, name, qtt: productInCart.qtt });
      }

      setState([...tempState]);
    }
    fetchProducts();
  }, [cart]);

  console.log(cart);

  async function handleSubmit() {
    try {
      const stripe = await stripePromise;
      console.log("-->>>",cart)
      const data = {
               products: cart.map((product) => {
                 console.log(product)
          return { productId: product.productId, qtt: product.qtt };
        }),
      };
console.log(data)
      const response = await api.post("/create-checkout-session", data);

      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirecionar o comprador pra página de pagamento do Stripe
      const result = await stripe.redirectToCheckout({
        sessionId: response.data._id,
      });

      if (result.error) {
        console.error(result.error.message);
      }

      console.log(response);
    } catch (err) {
      console.error(err.response.data);
    }
  }

  return (
    <div className="m-5">
      <h1 className="mb-2">Order Summary</h1>
      <div className="list-group">
        {state.map((product) => {
          return (
            <Link
              key={product._id}
              to={`/productDetails/${product._id}`}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between row">
                <div className="col-4">
                  <img
                    className="mw-100"
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>

                <div className="col-8">
                  <h5 className="mb-1">{product.name}</h5>
                  <h3>
                    {product.price.toLocaleString(
                      window.navigator.languages[0],
                      { style: "currency", currency: "USD" }
                    )}
                  </h3>
                  <small>Quantity: {product.qtt}</small>
                </div>
              </div>
            </Link>
          );
        })}

        <button className="btn btn-primary btn-lg mt-3" onClick={handleSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;

