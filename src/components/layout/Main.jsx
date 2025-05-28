import axios from "axios";
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
      <div className="row row-cols-4 gap-3">
        {actresses.map((actress) => {
          return (
            <div className="container">
              <div className="card h-100">
                <div className="card-header">{actress.name}</div>
                <div className="card-body">
                  <img src={actress.image} alt={actress.name} />
                  <p>{actress.birth_year}</p>
                  <p>{actress.nationality}</p>
                  <p>{actress.biography}</p>
                  <p>{actress.awards}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
