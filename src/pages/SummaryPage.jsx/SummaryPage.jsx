import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { summaryData, summaryStyle } from '../../data/summaryInfo';
import './SummaryPage.css';

const SummaryPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="Summary">
      <h2><FormattedMessage id="common.summary" /></h2>
      <h3><FormattedMessage id="common.summaryPage.dynamicData" /></h3>
      {summaryData.map(({ name, description: id }) => (
        <div key={name} className="item">
          <h4>{name}</h4>
          <p>{formatMessage({ id })}</p>
        </div>
      ))}
      <h3>Dados de estilo</h3>
      {summaryStyle.map(({ name, description }) => (
        <div key={name} className="item">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryPage;
