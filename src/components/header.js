import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <header className="header">
    <div className="logo">ROMAN MAKOVYAK</div>
    <nav className="nav">
      <Link to="/">HOME</Link>
      {/* <Link to="/experience">EXPERIENCE</Link> */}
      <Link to="/contact">CONTACT</Link>
    </nav>
  </header>
);
