import axios from "axios";

import Cardlist from "../CardList";
import { useState, useEffect } from "react";
const apiBaseUrl = `https://lanciweb.github.io/demo/api/actresses/`;

export default function Main() {
  const [actresses, setActresses] = useState([]);

  const fetchActresses = () => {
    axios.get(`${apiBaseUrl}`).then((response) => {
      const results = response.data;

      const normalizedActresses = results.map((actress) => {
        const { id, name, birth_year, nationality, biography, image, awards } =
          actress;

        return { id, name, birth_year, nationality, biography, image, awards };
      });
      setActresses(normalizedActresses);
    });
  };

  useEffect(fetchActresses, []);

  return (
    <main>
      <h1>Lista Attrici</h1>
      {/* <p>{JSON.stringify(actresses)}</p> */}
      <Cardlist actresses={actresses} />
    </main>
  );
}
