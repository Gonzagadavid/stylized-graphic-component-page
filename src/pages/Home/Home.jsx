import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import './Home.css';

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
      <li>Na guia Backgroud, estilizar o fundo do seu gráfico;</li>
      <li>Na guia Inserir Dados, insira dados simulando o que ocorrerá na sua aplização;</li>
      <li>Na guia Editar Barras, poderá alterar e excluir os dados e trocar a cor das barras;</li>
      <li>Na guia Estilizar Barras, configure detalhes nos estilo das barras;</li>
      <li>Na guia Legenda, poderá optar por usar legenda estilizada a seu gosto;</li>
    </ul>
  </div>
);

export default Home;
