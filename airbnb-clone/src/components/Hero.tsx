import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src="./photo-grid.png" className="hero--photo" alt="Photo grid of experiences" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;