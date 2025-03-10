import React, { useEffect } from 'react';

import { BrowserRouter } from "react-router-dom";

import ReactGA from "react-ga4";

import { Routes } from "jcot-jsreactlib";

import { AppContextProvider } from './contexts';

import './styles/index.css';
import './styles/main.css';

import siteMetadata from './data/siteMetadata';

if(siteMetadata.analytics.googleAnalyticsId) {
  ReactGA.initialize(siteMetadata.analytics.googleAnalyticsId);
}

const App = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes pages={pages} />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App
