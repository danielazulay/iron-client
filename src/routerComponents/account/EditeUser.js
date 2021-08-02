import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import { useParams } from "react-router";
import api from "../../apis/api";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

function EditeUser(props) {

  const history = useHistory();

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

  const { id } = useParams();

  function handleChange(event) {
    setState({ ...state, [event.currentTarget.name]: event.currentTarget.value, });
  }

  useEffect(() => {
    async function fetchEditeUser() {
      try {
        const fondUser = await api.get("/profile");

        const addressObj = ({ ...fondUser.data.address });

        delete fondUser.data.address;
        delete addressObj._id;

        const date = new Date(fondUser.data.birthDate);

        setState({
          ...fondUser.data,
          ...addressObj,
          birthDate: `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`,
        });




      } catch (err) {
        console.log(err);
      }
    }
    fetchEditeUser();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {

      const {
        street,
        neighbourhood,
        city,
        district,
        postalCode,
        number,
      } = state;

      const response = await api.put(`/editUser/${id}`, {...state, address: {
        street,
        neighbourhood,
        city,
        district,
        postalCode,
        number,
      },});

      console.log("eu sou handleSubmit --> ", response)

      history.push("/profile")

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
        value={state.street}
        onChange={handleChange}
        name="street"
      />
      <TextInput
        label="Number"
        type="text"
        required={false}
        value={state.number}
        onChange={handleChange}
        name="number"
      />

      <TextInput
        label="City"
        type="text"
        required={false}
        value={state.city}
        onChange={handleChange}
        name="city"
      />

      <TextInput
        label="District"
        type="text"
        required={false}
        value={state.district}
        onChange={handleChange}
        name="district"
      />

      <TextInput
        label="Neighbourhood"
        type="text"
        required={false}
        value={state.neighbourhood}
        onChange={handleChange}
        name="neighbourhood"
      />
      <TextInput
        label="Postal Code"
        type="text"
        required={false}
        value={state.postalCode}
        onChange={handleChange}
        name="postalCode"
      />
      <button type="submit" className="SaveBTN btn btn-secondary padding-bottom-2">
        Save
      </button>

      <Link type="button" to="/" className="btn btn-secondary">Cancel</Link>
    </form>

    
  );
}

export default EditeUser;
