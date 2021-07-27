import React, { useState } from "react";

import api from "../apis/api";
import TextInput from "../components/TextInput";

function Signup() {
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
            <option value="IPA">IPA</option>
            <option value="Larger">Larger</option>
            <option value="Pilsen">Pilsen</option>
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
            <option value="350ml">350ml</option>
            <option value="600ml">600ml</option>
            <option value="1l">1l</option>
          </select>
      </div>
    </div>
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

export default Signup;
