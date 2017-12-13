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
              <p className='lead text-center'>Retro dreaming goals raclette target twee palo santo, VHS schlitz offal
                XOXO crucifix. Echo park farm-to-table ugh tote bag actually helvetica air plant hexagon listicle
                tousled vaporware lomo.</p>
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
