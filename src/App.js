import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { PostsList } from './features/posts/PostsList.js'
import TopMenu from './components/TopMenu'

function App() {
  return (
    <Router>
      <TopMenu />
      <div className="container my-2">
        <Switch>
          <Route key="home" exact path="/" component={HomePage} />
          <Route key="posts" exact path="/posts" component={PostsList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App