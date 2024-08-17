import React from 'react';
import './header.css'; // Make sure to create this CSS file

const Header = ({ title, subtitle }) => {
  return (
    <div className="background-image-section">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
