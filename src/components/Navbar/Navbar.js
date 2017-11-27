import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/ts-logo.svg'

const navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container'>
        <NavLink to='/' exact className='nav-link'>
          <img src={logo} width='50' height='40' alt='travel-shelf logo' /><h4 style={{color: 'black'}} className='d-inline align-middle'>Travel Shelf</h4>
        </NavLink>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink to='/' exact className='nav-link'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/About' className="nav-link">About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/StoreIndex' exact className='nav-link'>Store Index</NavLink>
            </li>
            {/* <li className="nav-item"> */}
            {/* <a href="#contact" className="nav-link">Contact</a> */}
            {/* </li> */}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <div className='input-group'>
              <input type='text' className='form-control search' placeholder='Search' aria-label='Username' aria-describedby='basic-addon1' />
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default navbar
