import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <img
        src="./airbnb-logo.png"
        className="nav--logo"
        alt="Airbnb logo"
      />
      <span>Eva's Projects</span>
    </nav>
  );
};

export default Navbar;
