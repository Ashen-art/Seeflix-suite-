import { allMedia } from "../data/catalog_data.js";
import MediaList from "../components/media-components/MediaList.jsx";
import "./media.css";

export default function Media() {
  return (
    <div className="page-media page-media--grid">
      <div className="page-media-intro">
        <h1>Catalogue</h1>
      </div>
      <MediaList title="Tous les contenus" items={allMedia} />
    </div>
  );
}
