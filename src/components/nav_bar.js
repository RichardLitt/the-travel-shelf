import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Navbar extends Component {

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={require('../img/ts-logo.jpg')} width="50" height="40" alt="travel-shelf logo" /><h4 className="d-inline align-middle"> Travel Shelf</h4>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <Link to="/BookStoreList" className="nav-link">BookStores</Link>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#sign-up" className="nav-link">Sign Up</a>
              </li>
              <li className="nav-item">
                <a href="#login" className="nav-link">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        )
    }
  };

export default Navbar;
