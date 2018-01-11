import React, {Component} from 'react'
import './Map.css'

import Footer from '../../components/Footer/Footer'

class Map extends Component {
  render(){
    return (
      <div>

        <section id='mapHeading' className='py-5 text-white' data-type='background' data-speed='2'>
          <div className='primary-overlay'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col text-center'>
                  <h1 className='display-4 myhero text-center'>Map</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Map