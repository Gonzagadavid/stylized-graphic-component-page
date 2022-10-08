import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { settingsRoutes } from '../../pages/DataPage/DataPage';
import './NavSet.css';

const NavSet = () => (
  <nav className="NavSet">
    <ul>
      <li><Link to={settingsRoutes.BACKGROUND}><FormattedMessage id="navSetComponent.background" /></Link></li>
      <li><Link to={settingsRoutes.INSERT_DATA}><FormattedMessage id="navSetComponent.data" /></Link></li>
      <li><Link to={settingsRoutes.EDIT_BAR}><FormattedMessage id="navSetComponent.editBar" /></Link></li>
      <li><Link to={settingsRoutes.STYLE_BAR}><FormattedMessage id="navSetComponent.styleBar" /></Link></li>
      <li><Link to={settingsRoutes.LEGEND}><FormattedMessage id="navSetComponent.subtitle" /></Link></li>
    </ul>
    <Link to="/percentage-chart/code"><button type="button">Concluir</button></Link>
  </nav>
);

export default NavSet;
