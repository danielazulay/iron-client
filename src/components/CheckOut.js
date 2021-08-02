import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { CartContext } from "../contexts/cartContext";


import api from "../apis/api";

const stripePromise = loadStripe(
  "pk_test_51JIaznHTr9D5uUdXwbHXAUqFNQZR4HcVDVndsCbKjssoK9jvxXGnMMSfLrTgcRv8chAxcRpnSE7WUDRYBZoH6fnw00XUbBh54S"
);

function Checkout() {
  const { cart } = useContext(CartContext);
  

  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const tempState = [];

      for (let productInCart of cart) {
        
        const response = await api.get(`/productDetails/${productInCart.productId}`);

        const { _id, img, price, name } = response.data;
     
        if(tempState.indexOf(_id)<0){
    
          tempState.push({ _id, img, price, name, qtt: productInCart.qtt });

        }else {
     
        /*   const i = checkit(_id,tempState) */
 /*     
          tempState[i].qtt +=productInCart.qtt */
        }
        
console.log(tempState)
      
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

      console.log(response);
    } catch (err) {
      console.error(err.response.data);
    }
  }

  function handleDelet(event){

    let novo=[]
    novo= [...state]

    novo.slice()

    
 
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
              <div className="d-flex w-100 justify-content-between row"
               key={product._id}>
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
                    {product.price.toLocaleString(
                      window.navigator.languages[0],
                      { style: "currency", currency: "BRL" }
                    )}
                  </h3>
                  <small>Quantity: {product.qtt}</small>
                  
                </div>
                <button type="button" onClick={handleDelet}> <i className="far fa-trash-alt "></i></button>
              </div>
            </Link>
          );
        })}

        <button className="btn btn-primary btn-lg mt-3 m-2" onClick={handleSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;

