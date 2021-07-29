import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextProfile from "../../components/TextProfile";
import api from "../../apis/api";

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
        console.log("eu sou Response no Profile ---> ", response);
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    FetchProfile();
  }, []);

  return (
    <div>
      <TextProfile label="Name" name={state.name} />
      <TextProfile label="E-mail" name={state.email} />
      <TextProfile label="BirthDate" name={state.birthDate} />
      <TextProfile label="Document" name={state.document} />
      <TextProfile label="Phone Number" name={state.phoneNumber} />

      <h2 className="mb-4 mt-4">Address</h2>

      <TextProfile label="Street" name={state.address.street} />
      <TextProfile label="Number" name={state.address.number} />
      <TextProfile label="City" name={state.address.city} />
      <TextProfile label="State" name={state.address.district} />
      <TextProfile label="Neighbourhood" name={state.address.neighbourhood} />
      <TextProfile label="Postal Code" name={state.address.postalCode} />

      <Link style={{ color: "black" }} className="far fa-edit"  to={ `/editUser/${state._id}` }></Link>

    </div>
  );
}

export default Profile;
