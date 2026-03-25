import "./header.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header({ hero, showHero, showButton }) {
  return (
    <div className="header">
      <Navbar />
      {showHero ? (
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          background={hero.image}
          showButton={showButton}
        />
      ) : null}
    </div>
  );
}