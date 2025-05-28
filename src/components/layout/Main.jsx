import axios from "axios";
import { useState, useEffect } from "react";
const apiBaseUrl = `https://lanciweb.github.io/demo/api/actresses/`;

export default function Main() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}`).then((response) => {
      const results = response.data;
      const normalizedActresses = results.map((actress) => {
        const { id, name, birth_year, nationality, biography, image, awards } =
          actress;

        return { id, name, birth_year, nationality, biography, image, awards };
      });
      setActresses(normalizedActresses);
      console.log(results);
    });
  }, []);

  return (
    <main>
      <h1>Lista Attrici</h1>
      <ul>
        {actresses.map((actress) => {
          <li key={actress.id}>{actress.name}</li>;
        })}
      </ul>
    </main>
  );
}
// {
//     "id": 3,
//     "name": "Audrey Hepburn",
//     "birth_year": 1929,
//     "death_year": 1993,
//     "nationality": "British",
//     "most_famous_movies": [
//         "Breakfast at Tiffany's",
//         "Roman Holiday",
//         "My Fair Lady"
//     ],
//     "awards": "1 Academy Award, 3 Golden Globe Awards",
//     "biography": "Audrey Hepburn was a beloved actress and fashion icon, known for her elegance and timeless performances.",
//     "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Audrey_Hepburn_1956.jpg/220px-Audrey_Hepburn_1956.jpg"
// }
