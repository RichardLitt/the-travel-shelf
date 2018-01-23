import React from 'react'
import { Link } from 'react-router-dom'

const hero = () => {
  return (
    <section id='showcase' className='py-5 text-white'>
      <div className='primary-overlay'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col text-center'>
              <h1 className='display-4 myhero text-center'>A magazine of beautiful independent bookstores around the world</h1>
              <Link to='/about' className='btn btn-outline-warning btn-lg read'><i
                className='fa fa-arrow-right' /> Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
