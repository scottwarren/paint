import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './global-styles';

import Navigation from './layout/Navigation';

import Statistics from './pages/Statistics';
import Paint from './pages/Paint';
import { Drawing } from './components/Canvas';

function App(): React.ReactElement {
  // "global" state => would be good to extract this into a store
  const [drawing, setDrawing] = useState<Drawing>({});

  return (
    <>
      <GlobalStyles />
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path='/statistics'>
              <Statistics drawing={drawing} />
            </Route>
            <Route path='/'>
              <Paint drawing={drawing} setDrawing={setDrawing} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
