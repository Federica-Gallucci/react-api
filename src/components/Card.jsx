export default function Card({
  name,
  image,
  birth_year,
  nationality,
  biography,
  awards,
}) {
  return (
    <div className="card h-100">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <img src={image} alt={name} />
        <p>{birth_year}</p>
        <p>{nationality}</p>
        <p>{biography}</p>
        <p>{awards}</p>
      </div>
    </div>
  );
}
