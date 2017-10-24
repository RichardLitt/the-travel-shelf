import React, { Component } from 'react';
import Home from './scenes/Homepage/index'
import Bookstore from './scenes/BookstoreDetail/index'
import BookstoreList from './scenes/BookstoreList/index'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
          <Router>
              <div>
                  <ul>
                      <li><Link to="/Home">Home</Link></li>
                      <li><Link to="/Bookstore">BookStore</Link></li>
                      <li><Link to="/BookstoreList">List of bookstores</Link></li>

                  </ul>

                  <hr/>

                  <Route exact path="/scenes/Homepage/index" component={Home}/>
                  <Route path="/scenes/BookstoreDetail/index" component={Bookstore}/>
                  <Route path="/scenes/BookstoreList/index" component={BookstoreList}/>
                  <Route path="/Map" component={Map}/>
              </div>
          </Router>
    );
  }
}

export default App;
