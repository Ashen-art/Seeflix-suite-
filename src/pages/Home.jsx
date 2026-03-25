import { trending_movies } from "../data/trending_movies.js";
import { top_shows } from "../data/top_shows.js";
import MediaList from "../components/media-components/MediaList";


export default function Home() {
    return (
        <>
        <div className="home" style={
            {
                // height: "900px",
                width: "100%",
                backgroundColor: "#1C1C2E",
                overflow: "hidden",
                boxSizing: "border-box",
                padding: "40px 0"
            }
        }>
        <MediaList title="Top Shows" items={top_shows} />
        <MediaList title="Trending Movies" items={trending_movies} />
        </div>

        </>
    )
}