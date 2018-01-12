import React, { Component } from 'react'
import MapView from '../../components/MapView/MapView'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import './Map.css'

class Map extends Component {
  render () {
    let mapView = null
    if (this.props.stores) {
      mapView = <MapView stores={this.props.stores} />
    }
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
        {mapView}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(mapStateToProps)(Map)