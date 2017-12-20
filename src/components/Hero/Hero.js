import React from 'react'
import { NavLink } from 'react-router-dom'

const hero = () => {
  return (
    <section id='showcase' className='py-5 text-white'>
      <div className='primary-overlay'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col text-center'>
              <h1 className='display-4 myhero text-center'>An Index of Independent Bookstores</h1>
              <NavLink to='/Contact' className='btn btn-outline-warning btn-lg read'><i
                className='fa fa-arrow-right' /> Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
