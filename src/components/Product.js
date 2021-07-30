import React, { useState } from "react";
import api from "../apis/api";
import TextInput from "./TextInput";
import FileBase64 from 'react-file-base64';
import { useHistory } from "react-router-dom";

function Product() {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    bestUse: "",
    unity: "",
    description: "",
    category: "",
    size: "",
    alccol: "",
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
      const response = await api.post("/newProduct", state);
      console.log(response);
      history.push("/")
    } catch (err) {
      console.log(err.response);
    }
  }

  console.log(state)
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nome"
        id="name"
        type="text"
        value={state.name}
        onChange={handleChange}
        name="name"
        required= {true}
      />

      <TextInput
        label="Validade"
        id="text"
        type="date"
        value={state.bestUse}
        onChange={handleChange}
        name="bestUse"
        required
      />
      <TextInput
        label="Unidades"
        id="unity"
        type="number"
        value={state.unity}
        onChange={handleChange}
        name="unity"
        required
      />
      <TextInput
        label="Descrição"
        id="description"
        type="text"
        value={state.description}
        onChange={handleChange}
        name="description"
        required
      />
      <div>
        <label htmlFor="category">Categoria</label>
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
              <option>Selecione a Categoria</option>
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
      <label htmlFor="size">Tamanho</label>
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
            <option>Selecione o Tamanho</option>
            <option value="310">310</option>
            <option value="330">330</option>
            <option value="355">355</option>
            <option value="500">500</option>
            <option value="600">600</option>
          </select>
        </div>
      </div>

      <div>
      <label htmlFor="size">Alccol</label>
      <div className="input-group mb-3">
        <select
         label="alccol"
         id="alccol"
         value={state.alccol}
         onChange={handleChange}
         name="alccol"
          className="form-control"
          required
          >
            <option>Selecione o Tamanho</option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
      </div>



      <TextInput
        label="Preço"
        id="price"
        type="number"
        value={state.price}
        onChange={handleChange}
        name="price"
        required
      />
      <div className="form-group">
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setState({ ...state, img: base64 })}
        />
        <button className="btn btn-primary" type="submit">
          Adicionar
        </button>
      </div>
    </form>
  );
}

export default Product;