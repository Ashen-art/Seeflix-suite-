import "./hero.css";

export default function Hero({ title, subtitle, background, showButton }) {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="hr-overlay" />
      <div className="hr-content">
        <h2 className="hr-c-title">{title}</h2>
        <p className="hr-c-subtitle">{subtitle}</p>
        {showButton ? <button className="hr-c-btn">Explore</button> : ""}
      </div>
    </div>
  );
}