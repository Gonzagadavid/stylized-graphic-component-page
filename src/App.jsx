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

function App() {
  return (
    <div className="App">
      <nav id="nav-app">
        <div style={{ color: 'white', fontSize: '75px' }}>
          <a href="https://github.com/Gonzagadavid/percentage-chart" target="_blank" rel="noreferrer"><DiGithubBadge /></a>
          <a href="https://www.npmjs.com/package/stylized-graphic-component" target="_blank" rel="noreferrer"><DiNpm /></a>
        </div>
        <Link to="/percentage-chart"><FormattedMessage id="common.home" /></Link>
        <Link to="/percentage-chart/settings">Estilizar Gráfico</Link>
        <Link to="/percentage-chart/code">Código do Estilo</Link>
        <Link to="/percentage-chart/summary">Sumário</Link>
        <div>
          <SelectLanguage />
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/percentage-chart" component={Home} />
          <Route path="/percentage-chart/settings" component={SetPage} />
          <Route path="/percentage-chart/code" component={CodePage} />
          <Route path="/percentage-chart/summary" component={SummaryPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
