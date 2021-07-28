import "./App.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../apis/api";

function ResultSearch(props) {
  const { name } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get(`/search?name=${name}`);
        console.log(response);
        /*   setSearch({ ...response.data }); */
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchProfile();
  }, [name]);

  return <div></div>;
}

export default ResultSearch;
