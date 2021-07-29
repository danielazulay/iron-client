import "./App.css";

import React, { useState } from "react";


import Search from "./Search"

function RouterSearch(props) {


    const [products, setSearch] = useState({name:""});
 


    function handleChange(event) {
        setSearch({
            ...products,
            [event.currentTarget.name]: event.currentTarget.value,
        })
      }

    
  
    return (
        <div>
        { props.location.pathname==="/login"|| props.location.pathname==="/signup" || props.location.pathname==="/profile"? null:<Search handleChange={handleChange}   products={products}  />    }

      
</div>

    )
  }


export default RouterSearch