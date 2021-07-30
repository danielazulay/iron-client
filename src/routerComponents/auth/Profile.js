import { useState, useEffect } from "react";
import TextProfile from "../../components/TextProfile";
import api from "../../apis/api";
import {Link} from "react-router-dom"

function Profile() {
  const [state, setState] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    document: "",
    address: {
      street: "",
      neighbourhood: "",
      city: "",
      district: "",
      postalCode: "",
      number: "",
    },
    birthDate: "",
    phoneNumber: "",
    role: "",
  });

  useEffect(() => {
    async function FetchProfile() {
      try {
        const response = await api.get("/profile");
        

        const date = new Date( response.data.birthDate )


        setState({ ...response.data,
          birthDate: `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`,
        });

      } catch (err) {
        console.log(err);
      }
    }
    FetchProfile();
  }, []);

  return (
    <div>
      <TextProfile label="Nome" name={state.name} />
      <TextProfile label="Email" name={state.email} />
      <TextProfile label="Data de Nascimento" name={state.birthDate} />
      <TextProfile label="CPF" name={state.document} />
      <TextProfile label="Telefone" name={state.phoneNumber} />

      <h2 className="mb-4 mt-4">Endereço</h2>

      <TextProfile label="Rua" name={state.address.street} />
      <TextProfile label="Numero" name={state.address.number} />
      <TextProfile label="Cidade" name={state.address.city} />
      <TextProfile label="Estado" name={state.address.district} />
      <TextProfile label="Complemento" name={state.address.neighbourhood} />
      <TextProfile label="CEP" name={state.address.postalCode} />

      <Link  to={`/editUser/${state._id}`} >Edit Profile</Link>
    </div>

  );
}

export default Profile;