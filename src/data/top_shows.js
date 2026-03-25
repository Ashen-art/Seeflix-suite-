import BreakingBad from "../assets/show_covers/breaking_bad.jpg";
import StrangerThings from "../assets/show_covers/stranger_things.jpg";
import GameOfThrones from "../assets/show_covers/got.jpg";
import WednesdayPoster from "../assets/show_covers/Wednesday.jpg";
import SquidGamePoster from "../assets/show_covers/Squid Game.jpg";
import PeakyBlindersPoster from "../assets/show_covers/Peaky Blinders Poster.jpg";
import LastOfUsPoster from "../assets/show_covers/The last of us hd poster.jpg";
import BetterCallSaulPoster from "../assets/show_covers/Better Call Saul Posters.jpg";
import TheCrownPoster from "../assets/show_covers/thecrown.jpg";
import DarkPoster from "../assets/show_covers/Dark.jpg";
import ArcanePoster from "../assets/movie_covers/Arcane (1).jpg";

const tmdb = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export const top_shows = [
  {
    id: 1,
    title: "Breaking Bad",
    cover: BreakingBad,
    rating: 9.5,
    type: "tvshow",
  },
  {
    id: 2,
    title: "Stranger Things",
    cover: StrangerThings,
    rating: 8.7,
    type: "tvshow",
  },
  {
    id: 3,
    title: "Game of Thrones",
    cover: GameOfThrones,
    rating: 9.2,
    type: "tvshow",
  },
  {
    id: 4,
    title: "Wednesday",
    cover: WednesdayPoster,
    rating: 8.1,
    type: "tvshow",
  },
  {
    id: 5,
    title: "Squid Game",
    cover: SquidGamePoster,
    rating: 8.2,
    type: "tvshow",
  },
  {
    id: 6,
    title: "The Last of Us",
    cover: LastOfUsPoster,
    rating: 8.7,
    type: "tvshow",
  },
  {
    id: 7,
    title: "Better Call Saul",
    cover: BetterCallSaulPoster,
    rating: 8.7,
    type: "tvshow",
  },
  {
    id: 8,
    title: "The Crown",
    cover: TheCrownPoster,
    rating: 8.6,
    type: "tvshow",
  },
  {
    id: 9,
    title: "Peaky Blinders",
    cover: PeakyBlindersPoster,
    rating: 8.8,
    type: "tvshow",
  },
  {
    id: 10,
    title: "Chernobyl",
    cover: tmdb("/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg"),
    rating: 9.4,
    type: "tvshow",
  },
  {
    id: 11,
    title: "Dark",
    cover: DarkPoster,
    rating: 8.7,
    type: "tvshow",
  },
  {
    id: 12,
    title: "Arcane",
    cover: ArcanePoster,
    rating: 9.0,
    type: "tvshow",
  },
];
