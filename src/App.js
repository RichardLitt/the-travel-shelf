import React, { Component } from 'react'
import HomePage from './scenes/HomePage/HomePage'
import BookstoreIndex from './scenes/StoreIndex/StoreIndex'
import Navbar from './components/Navbar/Navbar'

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
        </div>
      </Router>
    )
  }
}

export default App
