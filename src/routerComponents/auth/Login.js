import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

import { AuthContext } from "../../contexts/authContext";

import TextInput from "../../components/TextInput";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [error, setError] = useState(null);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setError(null);
      props.history.push("/profile");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <TextInput
          label="E-mail"
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          onChange={handleChange}
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          onChange={handleChange}
        />

        {error ? <div className="alert alert-danger">{error}</div> : null}

        <div className="form-group">
          <button className="btn btn-primary" type="submit">
           Login
          </button>
        </div>

        <Link className="pb-3" to="/auth/signup">
        Not registered? Click here to register!
        </Link>
      </form>
    </div>
  );
}

export default Login;