import React from 'react'

const Menu = () => {
  return (

    <div className='container'>
      <a href='#' className='navbar-brand'>
        <img src='img/ts-logo.svg' width='50' height='50' alt='travel-shelf logo' /><h3 className='d-inline align-middle'> Travel Shelf</h3>
      </a>
      <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarNav'><span className='navbar-toggler-icon' /></button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a href='#home' className='nav-link'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about' className='nav-link'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#authors' className='nav-link'>Book Stores</a>
          </li>
          <li className='nav-item'>
            <a href='#contact' className='nav-link'>Contact</a>
          </li>
          <li className='nav-item'>
            <a href='#sign-up' className='nav-link'>Sign Up</a>
          </li>
          <li className='nav-item'>
            <a href='#login' className='nav-link'>Login</a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Menu
