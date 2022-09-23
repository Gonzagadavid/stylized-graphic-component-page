import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import './Home.css';

const items = Array(5).fill('').map((_, i) => (
  <li key={`item${i}`}><FormattedMessage id={`home.item${i + 1}`} /></li>
));

const Home = () => (
  <div className="Home">
    <h1>
      <FaReact />
      {' '}
      Stylized Graphic Component
      {' '}
      <FaReact />
    </h1>
    <p>
      <FormattedMessage id="home.title" />
    </p>
    <p><FormattedMessage id="home.subtitle" /></p>
    <ul>
      {items}
    </ul>
  </div>
);

export default Home;
