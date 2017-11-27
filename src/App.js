import React, { Component } from 'react'
import HomePage from './scenes/HomePage/HomePage'
import BookstoreIndex from './scenes/StoreIndex/StoreIndex'
import Navbar from './components/Navbar/Navbar'
import About from './scenes/About/About'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path='/' component={HomePage} />
          <Route path='/StoreIndex' component={BookstoreIndex} />
          <Route path='/About' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
