import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "../../img/ts-logo.svg";
import "./Navbar.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

class NavbarComponent extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar
          className="navbar"
          color="faded"
          light
          fixed={"top"}
          expand="md"
        >
          <Container>
            <NavbarBrand tag="div">
              <Link to="/">
                <img
                  src={logo}
                  width="50"
                  height="40"
                  alt="travel-shelf logo"
                />
                <h4
                  style={{ color: "black" }}
                  className="d-inline align-middle"
                >
                  Travel Shelf
                </h4>
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="nav-item">
                  <Link to="/" exact className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
