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
<<<<<<< HEAD
        { props.location.pathname==="/login"|| props.location.pathname==="/signup" || props.location.pathname==="/profile"? null:<Search handleChange={handleChange}   products={products}  />    }
=======
>>>>>>> c2bc5ca5d3d3721e41c999e0bcce5de8388db818

      

        { props.location.pathname==="/login"|| props.location.pathname==="/signup" ? null : <Search handleChange={handleChange} products={products} /> }

        

</div>

    )
  }


export default RouterSearch