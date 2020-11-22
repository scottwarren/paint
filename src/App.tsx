import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './global-styles';

import Routes from './Routes';
import Navigation from './layout/Navigation';

function App(): React.ReactElement {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div>
          <Navigation />
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
