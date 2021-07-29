import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import { useParams } from "react-router";
import api from "../../apis/api";

function EditeUser(props) {
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

  const { id } = useParams();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    async function fetchEditeUser() {
      try {
        const fondUser = await api.get("/profile");
        setState({ ...fondUser.data });

        
      } catch (err) {
        console.log(err);
      }
    }
    fetchEditeUser();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.put(`/editUser/${id}`, state);

      console.log(response)
      props.history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        required={false}
        value={state.name}
        onChange={handleChange}
        name="name"
      />

      <TextInput
        label="E-mail"
        type="email"
        required={false}
        value={state.email}
        onChange={handleChange}
        name="email"
      />

      <TextInput
        label="BirthDate"
        type="date"
        required={false}
        value={state.birthDate}
        onChange={handleChange}
        name="birthDate"
      />

      <TextInput
        label="Document"
        type="text"
        required={false}
        value={state.document}
        onChange={handleChange}
        name="document"
      />

      <TextInput
        label="Phone Number"
        type="Number"
        required={false}
        value={state.phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
      />
      <h2 className="mb-4 mt-4">Address</h2>
      <TextInput
        label="Street"
        type="text"
        required={false}
        value={state.address.street}
        onChange={handleChange}
        name="street"
      />
      <TextInput
        label="Number"
        type="text"
        required={false}
        value={state.address.number}
        onChange={handleChange}
        name="number"
      />

      <TextInput
        label="City"
        type="text"
        required={false}
        value={state.address.city}
        onChange={handleChange}
        name="city"
      />

      <TextInput
        label="District"
        type="text"
        required={false}
        value={state.address.district}
        onChange={handleChange}
        name="district"
      />

      <TextInput
        label="Neighbourhood"
        type="text"
        required={false}
        value={state.address.neighbourhood}
        onChange={handleChange}
        name="neighbourhood"
      />
      <TextInput
        label="Postal Code"
        type="text"
        required={false}
        value={state.address.postalCode}
        onChange={handleChange}
        name="postalCode"
      />
      <button type="submit" class="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
}

export default EditeUser;
