import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import './styles/global.scss'

import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Sidebar />
            <MainPanel />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
