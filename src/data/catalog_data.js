import { trending_movies } from "./trending_movies.js";
import { top_shows } from "./top_shows.js";

export const allMedia = [
  ...trending_movies,
  ...top_shows.map((item, index) => ({
    ...item,
    id: `tv-${item.id}-${index}`,
  })),
];
