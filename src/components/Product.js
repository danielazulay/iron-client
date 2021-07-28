import React, { useState } from "react";

import api from "../apis/api";
import TextInput from "./TextInput";

function Product() {
  const [state, setState] = useState({
    name: "",
    validity: "",
    unity: "",
    description: "",
    category: "",
    size: "",
    img: "",
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/newProduct", {
        ...state,
      });
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        id="name"
        type="text"
        value={state.name}
        onChange={handleChange}
        name="name"
        required= {true}
      />

      <TextInput
        label="Validity"
        id="text"
        type="month"
        value={state.validity}
        onChange={handleChange}
        name="validity"
        required
      />
      <TextInput
        label="Unity"
        id="unity"
        type="number"
        value={state.unity}
        onChange={handleChange}
        name="unity"
        required
      />
      <TextInput
        label="Description"
        id="description"
        type="text"
        value={state.description}
        onChange={handleChange}
        name="description"
        required
      />
<div>
<label htmlFor="category">Category</label>
      <div className="input-group mb-3">
        <select
         label="Category"
         id="category"
         value={state.category}
         onChange={handleChange}
         name="category"
          className="form-control"
          required
          >
            <option>Select Category</option>
            <option value="leve">leve</option>
            <option value="Maltadas">Maltadas</option>
            <option value="Lupuladas">Lupuladas</option>
            <option value="Torradas">Torradas</option>
            <option value="Frutadas">Frutadas</option>
            <option value="Sem Alcool">Sem Alcool</option>
            <option value="Sem Glutem">Sem Glutem</option>
          </select>
      </div>
    </div>
<div>
      <label htmlFor="size">Size</label>
      <div className="input-group mb-3">
        <select
         label="Size"
         id="size"
         value={state.size}
         onChange={handleChange}
         name="size"
          className="form-control"
          required
          >
            <option>Select Size</option>
            <option value="310">310</option>
            <option value="330">330</option>
            <option value="355">355</option>
            <option value="500">500</option>
            <option value="600">600</option>
          </select>
      </div>
    </div>
    <TextInput
        label="Price"
        id="price"
        type="number"
        value={state.price}
        onChange={handleChange}
        name="price"
        required
      />
      <div className="form-group">
      <form action="/action_page.php">
    <label for="img">Select image:</label>
    <input type="file" id="img" name="img" accept="image/*"></input>
    </form>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
      </form>
  );
}

export default Product;
