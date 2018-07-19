import React from 'react';

import Container from '../components/container';
import Header from '../components/header';

export default () => (
  <Container>
    <Header />
    <section className="section">
      <div className="content">
        <h1 className="content__heading">Contact</h1>
        <ul>
          <li>
            <a className="contact-link" href="mailto:roman.makovyak@gmail.com" target="_top">
              roman.makovyak@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Container>
);
