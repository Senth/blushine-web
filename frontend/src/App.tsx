import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import AppBar from './AppBar/AppBar'
import CommandPage from './Pages/CommandPage'
import HomePage from './Pages/HomePage'
import MapPage from './Pages/MapPage'
import ModPage from './Pages/ModPage'
import ViewportProvider from './utils/ViewportProvider'

function App() {
  return (
    <Router>
      <ViewportProvider>
        <AppBar />
      </ViewportProvider>
      <Route exact={true} path='/' component={HomePage} />
      <Route path='/map' component={MapPage} />
      <Route path='/mods' component={ModPage} />
      <Route path='/command' component={CommandPage} />
    </Router>
  )
}

export default App
