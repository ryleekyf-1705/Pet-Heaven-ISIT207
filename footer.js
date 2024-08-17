import React from 'react';
import './footer.css'; // Make sure to create a Footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© 2024 Pet Heaven. All rights reserved.</span>
      </div>
      <div className="container">
        <span className="text-muted">By: Kuek Yu Fei</span>
      </div>
      <div className="container">
        <span className="text-muted">UOW ID: 8378356</span>
      </div>
    </footer>
  );
};

export default Footer;
