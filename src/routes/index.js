import React from 'react'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import HomePage from '../pages/HomePage'
import About from '../pages/About.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route key="home" path="/" element={<HomePage />} />
          <Route key="about" path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App