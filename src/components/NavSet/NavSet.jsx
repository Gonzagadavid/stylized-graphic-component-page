import React from 'react';
import { Link } from 'react-router-dom';
import { settingsRoutes } from '../../pages/DataPage/DataPage';
import './NavSet.css';

const NavSet = () => (
  <nav className="NavSet">
    <ul>
      <li><Link to={settingsRoutes.BACKGROUND}>Estilo Background</Link></li>
      <li><Link to={settingsRoutes.INSERT_DATA}>Inserir Dados</Link></li>
      <li><Link to={settingsRoutes.EDIT_BAR}>Editar Barras</Link></li>
      <li><Link to={settingsRoutes.STYLE_BAR}>Estilizar Barras</Link></li>
      <li><Link to={settingsRoutes.LEGEND}>Legenda</Link></li>
    </ul>
    <Link to="/percentage-chart/code"><button type="button">Concluir</button></Link>
  </nav>
);

export default NavSet;
