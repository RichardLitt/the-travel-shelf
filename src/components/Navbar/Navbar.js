import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/ts-logo.svg'
import './Navbar.css'

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
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link'>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/stores' exact className='nav-link'>Stores</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/map' exact className='nav-link'>Map</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' exact className='nav-link'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
