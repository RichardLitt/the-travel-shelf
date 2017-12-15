import React from 'react'
import { NavLink } from 'react-router-dom'

const hero = () => {
  return (
    <section id='showcase' className='py-5 text-white'>
      <div className='primary-overlay'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col text-center'>
              <h1 className='display-4 myhero text-center'>A Magazine and Index of Beautiful Global Independent
                Bookstores</h1>
              <p className=' text-center hero-lead'>The Travel Shelf is a curated listing of beautiful, independent bookstores around the world.</p>
              <NavLink to='/Contact' className='btn btn-outline-warning btn-lg read'><i
                className='fa fa-arrow-right'/> Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
