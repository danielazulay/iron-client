import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";
function Cards(props) {
    return (
     <div>
<div className="card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petlove.com.br%2Fcerveja-dog-beer-sem-alcool-sabor-carne-para-caes%2Fp&psig=AOvVaw1edSXfqAIXgnONwOXyy-zJ&ust=1627477101554000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDHk-emg_ICFQAAAAAdAAAAABAD" className="img-fluid rounded-start" fluid={true} alt="Card image" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
  
  export default Cards;