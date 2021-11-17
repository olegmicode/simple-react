import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { AuthorsList } from './features/authors/AuthorsList.js'
import TopMenu from './components/TopMenu'

function App() {
  return (
    <Router>
      <TopMenu />
      <div className="app">
        <Switch>
          <Route key="home" exact path="/" component={HomePage} />
          <Route key="authors" exact path="/authors" component={AuthorsList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App