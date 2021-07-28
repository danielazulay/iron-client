import "./App.css";

import React, { useState } from "react";

/* import api from "../api"; */
import Search from "./Search"

function RouterSearch(props) {
    const [products, setSearch] = useState({name:""});
  



    function handleChange(event) {
        setSearch({
            ...products,
            [event.currentTarget.name]: event.currentTarget.value,
        })
      }

/*     async function handleSubmit(event) {
      event.preventDefault();
        try {


          const response = await api.get(`/search?name=${products.product}`);
   
          console.log(response)
     
        } catch (err) {
          console.error(err.response);
        }
      } */
    
  
    return (
        <div>

<Search handleChange={handleChange}   products={products}  />

</div>

    )
  }


export default RouterSearch