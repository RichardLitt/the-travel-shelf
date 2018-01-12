import React, { Component } from 'react'
import MapView from '../../components/MapView/MapView'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import './Map.css'
import * as actionCreators from '../../store/actions/index'

class Map extends Component {

  storeSelectHandler = (name) => {
    this.props.onStoreSelect(name)
    this.props.history.push({pathname: /StoreIndex/ + name})
  }

  render () {
    let mapView = null
    if (this.props.stores) {
      mapView = <MapView stores={this.props.stores} clicked={this.storeSelectHandler} />
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

const mapDispatchToProps = dispatch => {
  return {
    onStoreSelect: (name) => dispatch(actionCreators.selectStore(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)