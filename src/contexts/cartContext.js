import { useState, createContext, useEffect } from "react";

const CartContext = createContext([]);

function CartContextComponent(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    const parsedStoredCart = JSON.parse(storedCart || '""');

    // Se existe um usuário logado armazenado no localStorage, atualize o state global
    if (parsedStoredCart.length) {
      setCart([...parsedStoredCart]);
    }
  }, []);

  // O componente Provider serve para disponibilizar o Context (state global) para todos seus componentes filhos
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextComponent, CartContext };