import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(): React.ReactElement {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Paint</Link>
        </li>
        <li>
          <Link to='/statistics'>Statistics</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
