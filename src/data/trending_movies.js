import Inception from "../assets/movie_covers/Inception.jpg";
import TheDarkKnight from "../assets/movie_covers/The_Dark_Knight.webp";
import Interstellar from "../assets/movie_covers/Interstellar.webp";
import Avatar from "../assets/movie_covers/Avatar.jpg";
import AvengersEndGame from "../assets/movie_covers/Avengers_Endgame.webp";
import DunePoster from "../assets/movie_covers/Dune Poster.jpg";
import GladiatorPoster from "../assets/movie_covers/GLADIATOR (2000) poster design by Sahin Düzgün.jpg";
import LordOfTheRings from "../assets/movie_covers/LordOfTheRings.jpg";
import ParasiteCover from "../assets/movie_covers/Parasite.jpg";
import TheBatmanCover from "../assets/movie_covers/The Batman - 2022.jpg";

const tmdb = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export const trending_movies = [
  {
    id: 1,
    title: "Inception",
    cover: Inception,
    rating: 8.8,
    type: "movie",
  },
  {
    id: 2,
    title: "The Dark Knight",
    cover: TheDarkKnight,
    rating: 9.0,
    type: "movie",
  },
  {
    id: 3,
    title: "Interstellar",
    cover: Interstellar,
    rating: 8.6,
    type: "movie",
  },
  {
    id: 4,
    title: "Avatar",
    cover: Avatar,
    rating: 7.9,
    type: "movie",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    cover: AvengersEndGame,
    rating: 8.4,
    type: "movie",
  },
  {
    id: 6,
    title: "Dune",
    cover: DunePoster,
    rating: 8.0,
    type: "movie",
  },
  {
    id: 7,
    title: "Oppenheimer",
    cover: tmdb("/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"),
    rating: 8.4,
    type: "movie",
  },
  {
    id: 8,
    title: "Spider-Man: No Way Home",
    cover: tmdb("/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"),
    rating: 8.2,
    type: "movie",
  },
  {
    id: 9,
    title: "Parasite",
    cover: ParasiteCover,
    rating: 8.5,
    type: "movie",
  },
  {
    id: 10,
    title: "The Batman",
    cover: TheBatmanCover,
    rating: 7.8,
    type: "movie",
  },
  {
    id: 11,
    title: "Gladiator",
    cover: GladiatorPoster,
    rating: 8.5,
    type: "movie",
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    cover: LordOfTheRings,
    rating: 8.8,
    type: "movie",
  },
];
