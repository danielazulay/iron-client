import { useState, useEffect } from "react";
import TextProfile from "../../components/TextProfile";
import api from "../../apis/api";

function Profile() {
  const [state, setState] = useState({
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
      <TextProfile label="Email" name={state.email} />
      <TextProfile label="BirthDate" name={state.birthDate} />
      <TextProfile label="Document" name={state.document} />
      <TextProfile label="Phone Number" name={state.phoneNumber} />

      <h2 className="mb-4 mt-4">Eddress</h2>

      <TextProfile label="Street" name={state.street} />
      <TextProfile label="Number" name={state.number} />
      <TextProfile label="City" name={state.city} />
      <TextProfile label="State" name={state.district} />
      <TextProfile label="Neighbourhood" name={state.neighbourhood} />
      <TextProfile label="Postal Code" name={state.postalCode} />
      
    </div>
  );
}

export default Profile;
