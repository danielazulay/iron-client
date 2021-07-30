import React, { useState } from "react";

import api from "../../apis/api";
import TextInput from "../../components/TextInput";

function Signup(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    document: "",
    street: "",
    neighbourhood: "",
    city: "",
    district: "",
    postalCode: "",
    number: "",
    birthDate: "",
    phoneNumber: "",
    role: "",
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault(props);

    try {
      const { street, neighbourhood, city, district, postalCode, number } =
        state;

      const response = await api.post("/signup", {
        ...state,
        address: {
          street,
          neighbourhood,
          city,
          district,
          postalCode,
          number,
        },
      });
      props.history.push("/login");
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  }

  console.log(state);

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nome Completo"
        id="name"
        type="text"
        value={state.name}
        onChange={handleChange}
        name="name"
        required={true}
      />

      <TextInput
        label="E-mail"
        id="email"
        type="email"
        value={state.email}
        onChange={handleChange}
        name="email"
        required
      />
      <TextInput
        label="Senha"
        id="password"
        type="password"
        value={state.password}
        onChange={handleChange}
        name="password"
        required
      />
      <TextInput
        label="CPF"
        id="document"
        type="number"
        value={state.document}
        onChange={handleChange}
        name="document"
        required
      />

      <h3 className="mb-3">Endereço</h3>
      <TextInput
        label="Rua"
        id="street"
        type="text"
        value={state.street}
        onChange={handleChange}
        name="street"
        required
      />
      <TextInput
        label="Numero"
        id="number"
        type="text"
        value={state.number}
        onChange={handleChange}
        name="number"
        required
      />

      <TextInput
        label="Complemento"
        id="neighbourhood"
        type="text"
        value={state.neighbourhood}
        onChange={handleChange}
        name="neighbourhood"
        required
      />
      <TextInput
        label="Cidade"
        id="city"
        type="text"
        value={state.city}
        onChange={handleChange}
        name="city"
        required
      />
      <TextInput
        label="Estado"
        id="district"
        type="text"
        value={state.district}
        onChange={handleChange}
        name="district"
        required
      />
      <TextInput
        label="CEP"
        id="postalCode"
        type="number"
        value={state.postalCode}
        onChange={handleChange}
        name="postalCode"
        required
      />
      <TextInput
        label="Data de Nascimento"
        id="birthDate"
        type="date"
        value={state.birthDate}
        onChange={handleChange}
        name="birthDate"
        required={false}
      />
      <TextInput
        label="Telefone"
        id="phoneNumber"
        type="text"
        value={state.phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
        required={false}
      />

      <div>
        <label htmlFor="role">Role</label>
        <div className="input-group mb-3">
          <select
            label="Role"
            id="role"
            value={state.role}
            onChange={handleChange}
            name="role"
            required
            className="form-control"
          >
            <option value="ADMIN">Vendedor</option>
            <option value="USER">Comprador</option>
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default Signup;
