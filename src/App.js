import React, { Component } from 'react';
import Homepage from './scenes/Homepage/index'
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
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/scenes/BookstoreDetail/index">BookStore</Link></li>
                      <li><Link to="/scenes/BookstoreList/index">List of bookstores</Link></li>

                  </ul>

                  <hr/>

                  <Route exact path="/" component={Homepage}/>
                  <Route path="/scenes/BookstoreDetail/index" component={Bookstore}/>
                  <Route path="/scenes/BookstoreList/index" component={BookstoreList}/>
                  <Route path="/Map" component={Map}/>
              </div>
          </Router>
    );
  }
}

export default App;
