import React, { Component } from 'react'
import HomePage from './scenes/HomePage/HomePage'
import StoreIndex from './scenes/StoreIndex/StoreIndex'
import Store from './scenes/Store/Store'
import Navbar from './components/Navbar/Navbar'
import ContactPage from './scenes/ContactPage/ContactPage'
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
          <Route path='/About' component={About} />
          <Route path='/Contact' component={ContactPage} />
          <Route path='/StoreIndex' exact component={StoreIndex} />
          <Route path='/StoreIndex/:name' component={Store} />
        </div>
      </Router>
    )
  }
}

export default App
