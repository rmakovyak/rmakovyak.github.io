import React from 'react';
import Link from 'gatsby-link';

import styles from '../styles/main.css';

export default () => (
  <div className="container">
    <header className="header">
      <div className="logo">ROMAN MAKOVYAK</div>
      <nav className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">EXPERIENCE</Link>
        <Link to="/experience">CONTACT</Link>
      </nav>
    </header>
    <section className="section">
      <div className="content">
        <h1 className="content__heading">Hi! I'm Roman.</h1>
        <p className="content__subheading">
          Frontend developer located in Berlin
        </p>
        {/* <a target="_blank" href="https://www.linkedin.com/in/roman-makovyak/">
          Linkedin
        </a> */}
      </div>
    </section>
  </div>
);
