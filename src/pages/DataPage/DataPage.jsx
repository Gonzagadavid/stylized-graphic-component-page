import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditBarContainer from '../../components/InputsContainer/EditBarContainer';
import InputBackground from '../../components/InputsContainer/InputBackground';
import InputBar from '../../components/InputsContainer/InputBar';
import InputData from '../../components/InputsContainer/InputData';
import Legend from '../../components/InputsContainer/Lengend';
import './DataPage.css';

export const settingsRoutes = {
  BACKGROUND: '/settings/background',
  INSERT_DATA: '/settings/insert-data',
  EDIT_BAR: '/settings/edit-bar',
  STYLE_BAR: '/settings/style-bar',
  LEGEND: '/settings/legend',
};

const DataPage = () => (
  <div className="DataPage">
    <Switch>
      <Route exact path={settingsRoutes.BACKGROUND} component={InputBackground} />
      <Route path={settingsRoutes.INSERT_DATA} component={InputData} />
      <Route path={settingsRoutes.EDIT_BAR} component={EditBarContainer} />
      <Route path={settingsRoutes.STYLE_BAR} component={InputBar} />
      <Route path={settingsRoutes.LEGEND} component={Legend} />
    </Switch>
  </div>
);

export default DataPage;
