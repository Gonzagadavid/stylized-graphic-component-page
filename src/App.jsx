import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { DiNpm, DiGithubBadge } from 'react-icons/di';
import { FormattedMessage } from 'react-intl';
import CodePage from './pages/CodePage/CodePage';
import Home from './pages/Home/Home';
import SetPage from './pages/SetPage/SetPage';
import SummaryPage from './pages/SummaryPage.jsx/SummaryPage';
import SelectLanguage from './components/SelectLanguage';
import { settingsRoutes } from './pages/DataPage/DataPage';

const routes = {
  HOME: '/',
  SETTINGS: '/settings/*',
  CODE: '/code',
  SUMMARY: '/summary',
};

function App() {
  return (
    <div className="App">
      <nav id="nav-app">
        <div style={{ color: 'white', fontSize: '75px' }}>
          <a href="https://github.com/Gonzagadavid/stylized-graphic-component-page" target="_blank" rel="noreferrer"><DiGithubBadge /></a>
          <a href="https://www.npmjs.com/package/stylized-graphic-component" target="_blank" rel="noreferrer"><DiNpm /></a>
        </div>
        <Link to={routes.HOME}><FormattedMessage id="common.home" /></Link>
        <Link to={settingsRoutes.BACKGROUND}><FormattedMessage id="common.styleChart" /></Link>
        <Link to={routes.CODE}><FormattedMessage id="common.styleCode" /></Link>
        <Link to={routes.SUMMARY}><FormattedMessage id="common.summary" /></Link>
        <div>
          <SelectLanguage />
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route path={routes.SETTINGS} component={SetPage} />
          <Route path={routes.CODE} component={CodePage} />
          <Route path={routes.SUMMARY} component={SummaryPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
