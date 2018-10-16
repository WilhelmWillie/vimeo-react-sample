import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import the necessary page components
import Landing from './pages/Landing'
import Layout from './pages/Layout'
import Carousel from './pages/Carousel'

import './scss/App.scss'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/layout" component={Layout} />
      <Route path="/carousel" component={Carousel} />
    </div>
  </Router>
)

export default App
