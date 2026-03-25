import "./medialist.css";
import MediaCard from "./MediaCard.jsx";

export default function MediaList({ title, items }) {
  return (
    <>
      <div className="media-list">
        <h2 className="media-list-title">{title}</h2>
        <div className="media-list-items">
          {items.map((item) => (
            <MediaCard
              key={item.id}
              title={item.title}
              cover={item.cover}
              rating={item.rating}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </>
  );
}