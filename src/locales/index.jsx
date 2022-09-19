import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { flatten } from 'flat';
import messages from './languages';

const LocaleProvider = ({ children }) => {
  const { locale } = useSelector((state) => state);
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={flatten(messages[locale])}
    >
      {children}
    </IntlProvider>
  );
};
export default LocaleProvider;
