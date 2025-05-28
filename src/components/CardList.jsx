import Card from "./Card";
export default function Cardlist({ actresses }) {
  return (
    <div className="row row-cols-4 gap-3">
      {actresses.map((actress) => {
        return (
          <div className="container">
            <Card
              key={actress.id}
              name={actress.name}
              birth_year={actress.birth_year}
              nationality={actress.nationality}
              biography={actress.biography}
              image={actress.image}
              awards={actress.awards}
            />
          </div>
        );
      })}
    </div>
  );
}
