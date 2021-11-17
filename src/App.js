import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import TopMenu from './components/TopMenu'
import HomePage from './pages/HomePage'
import { PostsList } from './features/posts/PostsList.js'
import { AddPostForm } from './features/posts/AddPostForm.js'
import { EditPostForm } from './features/posts/EditPostForm.js'
import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <TopMenu />
      <div className="container my-2">
        <Switch>
          <Route key="home" exact path="/" component={HomePage} />
          <Route key="posts" exact path="/posts" component={PostsList} />
          <Route key="add-post" exact path="/posts/add" component={AddPostForm} />
          <Route key="edit-post" exact path="/posts/edit/:id" component={EditPostForm} />
          <Route key="single-post" exact path="/posts/:id" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App