import "./mediacard.css";

const typeLabels = {
  movie: "Movies",
  tvshow: "TV Shows",
};

export default function MediaCard({ title, cover, rating, type }) {
  const typeClass =
    type === "movie"
      ? "media-card--movie"
      : type === "tvshow"
        ? "media-card--tvshow"
        : "";
  const typeLabel = type ? typeLabels[type] ?? type : "";

  return (
    <div className={`media-card ${typeClass}`}>
      <img className="md-c-img" src={cover} alt={title} />
      <div className="md-c-info">
        <h3 className="c-title">{title}</h3>
        {typeLabel ? <p className="c-type">{typeLabel}</p> : null}
        <p className="c-rating">Note : {rating}</p>
      </div>
    </div>
  );
}