import React, { Component } from 'react'
import Homepage from './scenes/Homepage/index'
import Bookstore from './scenes/BookstoreDetail/index'
import BookstoreList from './scenes/BookstoreList/index'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/BookStore'>BookStore</Link></li>
            <li><Link to='/BookStoreList'>List of bookstores</Link></li>

          </ul>

          <hr />

          <Route exact path='/' component={Homepage} />
          <Route path='/BookStore' component={Bookstore} />
          <Route path='/BookStoreList' component={BookstoreList} />
          <Route path='/Map' component={Map} />
        </div>
      </Router>
    )
  }
}

export default App
