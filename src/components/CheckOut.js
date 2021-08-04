import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { CartContext } from "../contexts/cartContext";

import api from "../apis/api";

const stripePromise = loadStripe(
  "pk_test_51JIaznHTr9D5uUdXwbHXAUqFNQZR4HcVDVndsCbKjssoK9jvxXGnMMSfLrTgcRv8chAxcRpnSE7WUDRYBZoH6fnw00XUbBh54S"
);

function Checkout() {
  const { cart, setCart } = useContext(CartContext);



  const [state, setState] = useState([]);

  useEffect(() => {

    async function fetchProducts() {
  
      const tempState = [];

      for (let productInCart of cart) {
        const response = await api.get(
          `/productDetails/${productInCart.productId}`
        );

        const { _id, img, price, name } = response.data;

      
          tempState.push({ _id, img, price, name, qtt: productInCart.qtt });
       
      }

      setState([...tempState]);
    }
    fetchProducts();
  }, [cart]);

  async function handleSubmit() {
    try {
      const stripe = await stripePromise;

      const data = {
        products: cart.map((product) => {
          return { productId: product.productId, qtt: product.qtt };
        }),
      };

      const response = await api.post("/create-checkout-session", data);

      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirecionar o comprador pra página de pagamento do Stripe
      const result = await stripe.redirectToCheckout({
        sessionId: response.data._id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (err) {
      console.error(err.response.data);
    }
  }

  function handleTotal(){
let sum=0;
    state.map((item)=>{

      sum+=item.price*item.qtt
return sum
    })
    console.log(sum)
    return sum.toLocaleString(
      window.navigator.languages[0],
      { style: "currency", currency: "BRL" }
    )
  
  }

  return (
    <div className="m-5">
      <h1 className="mb-2 text-center">Order Summary</h1>
      <div className="list-group">
        {state.map((product) => {
          return (
            <>
              <Link
                key={product._id}
                to={`/productDetails/${product._id}`}
                className="list-group-item list-group-item-action"
              >
                <div
                  className="d-flex w-100 justify-content-between row"
                  key={product._id}
                >
                  <div className="col-4">
                    <img
                      className="mw-100"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>

                  <div className="col-8">
                    <h5 className="mb-1">{product.name}</h5>
                    <h3>
                      Sub-Total: {(product.price*product.qtt).toLocaleString(
                        window.navigator.languages[0],
                        { style: "currency", currency: "BRL" }
                      )}
                    </h3>
                    <small>Price: {product.price}</small>
                    <br/>
                    <small>Quantity: {product.qtt}</small>
                  </div>
                </div>
              </Link>
              <button class="btn btn-secondary  mx-auto d-block d-grid gap-2  mx-autoo"
                type="button"
                onClick={() => {
                  for (let i = 0; i < cart.length; i++) {
                    if (cart[i].productId === product._id) {
                      console.log(i);
                      cart.splice(i, 1);
                    }
                  }
                  setCart([...cart])
              
                }}
              >
              
                <i className="far fa-trash-alt "></i>
              </button>
              
            </>
          );
        })}
        <div className="m-2 text-center"><h1>TOTAL: {handleTotal()}</h1></div>
        <button
          className="btn btn-primary btn-lg mt-3 m-2"
          onClick={handleSubmit}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
