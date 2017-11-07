import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './scenes/Homepage';
import BookstoreList from './scenes/BookstoreList';
import NavBar from '././components/nav_bar.js';

class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Homepage}/>
            <Route path="/BookStoreList" component={BookstoreList}/>            
          </div>
        </Router>
    );
  }
}

export default App;
