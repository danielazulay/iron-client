import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../apis/api";

import TextInput from "./TextInput";

function EditProduct(props) {
  const [state, setState] = useState({
    name: "",
    validity: "",
    unity: "",
    description: "",
    category: "",
    size: "",
    img: "",
  });
  const [setError] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get(`/profile`);
console.log(response)
        setState({
          ...response.data,
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, [id]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      
      await api.put(`/editProduct/${id}`, {
        ...state,
        address: {
          name: "",
          validity: "",
          unity: "",
          description: "",
          category: "",
          size: "",
          img: "",
        },
        
      });

      history.push("/");
    } catch (err) {
      setError(err.response.data);
    }
  }

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
        value={state.validity}
        onChange={handleChange}
        name="validity"
        required
      />
      <TextInput
        label="Unidade"
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
      <form action="/action_page.php">
    <label htmlFor="img">Select image:</label>
    <input type="file" id="img" name="img" accept="image/*"></input>
    </form>
        <button className="btn btn-secondary" type="submit" >
          Salvar
        </button>
        
        
       
      
        
      </div>

      </form>

            
      
  );
}

export default EditProduct;