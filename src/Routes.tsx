import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Statistics from './pages/Statistics'
import Paint from './pages/Paint'

function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path='/statistics'>
        <Statistics />
      </Route>
      <Route path='/'>
        <Paint />
      </Route>
    </Switch>
  )
}

export default Routes
