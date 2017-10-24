import React, { Component } from 'react';
import Home from './components/Home'
import Index from './components/Index'
import Articles from './components/Articles'
import Map from './components/Map'

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
                      <li><Link to="/index">index</Link></li>
                      <li><Link to="/articles">Articles</Link></li>
                      <li><Link to="/map">Map</Link></li>

                  </ul>

                  <hr/>

                  <Route exact path="/" component={Home}/>
                  <Route path="/Index" component={Index}/>
                  <Route path="/Articles" component={Articles}/>
                  <Route path="/Map" component={Map}/>
              </div>
          </Router>
    );
  }
}

export default App;
