import React from 'react';
import Icon from 'react-fontawesome';
import styles from '../styles/main.css';
import fontawesome from '../../node_modules/font-awesome/css/font-awesome.css';

import Container from '../components/container';
import Header from '../components/header';

export default () => (
  <Container>
    <Header />
    <section className="section">
      <div className="content">
        <h1 className="content__heading">Hi! I'm Roman.</h1>
        <p className="content__subheading">Frontend developer located in Berlin</p>
        <ul className="list-inline">
          <li>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/roman-makovyak/"
              target="_blank"
            >
              <Icon name="linkedin" size="2x" />
            </a>
          </li>
          <li>
            <a
              className="contact-link contact-link--github"
              href="https://github.com/rmakovyak"
              target="_blank"
            >
              <Icon name="github" size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Container>
);
