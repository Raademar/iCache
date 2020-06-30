import React from 'react'
import './App.scss'
import './styles/global.scss'

import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPanel />
    </div>
  )
}

export default App
