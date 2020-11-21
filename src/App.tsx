import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'
import Navigation from './layout/Navigation'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes />
      </div>
    </Router>
  )
}

export default App
