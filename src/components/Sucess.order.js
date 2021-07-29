import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";

import api from "../../apis/index";

function OrderSuccess() {
  const { cart, setCart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

  console.log(cart);

  useEffect(() => {
    async function createTransaction() {
      try {
        if (cart.length) {
          const response = await api.post("/transaction", {
            buyerId: loggedInUser.user._id,
            products: [...cart],
          });

          console.log(response);

          setCart([]);
          localStorage.removeItem("cart");
        } else {
          throw new Error("Empty cart!");
        }
      } catch (err) {
        console.error(err);
      }
    }
    createTransaction();
  }, [cart, setCart, loggedInUser]);

  return (
    <div>
      <i
        style={{ fontSize: "70px" }}
        class="bi bi-check-circle-fill text-success"
      ></i>

      <h1>Order Confirmed!</h1>

      <p>You will receive a confirmation soon.</p>

      <small>Thanks for buying from us!</small>

      <Link to="/profile">See your orders</Link>
    </div>
  );
}

export default OrderSuccess;