import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './scenes/HomePage/HomePage'
import StoreIndex from './scenes/StoreIndex/StoreIndex'
import Store from './scenes/Store/Store'
import Navbar from './components/Navbar/Navbar'
import ContactPage from './scenes/ContactPage/ContactPage'
import About from './scenes/About/About'

import * as actionCreators from './store/actions/index'

import Map from './scenes/Map/Map'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchStores()
  }

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
          <Route path='/Map' component={Map} />
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStores: () => dispatch(actionCreators.fetchStores())
  }
}

export default connect(null, mapDispatchToProps)(App)
