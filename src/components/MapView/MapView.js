import React, { Component } from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import * as imageData from '../../utilities/imageLoader'

class MapView extends Component {
  state = {
    position: {lat: 45.5017, long: -73.5673},
    zoom: 10
  }

  render () {

    let markers = null

    if(this.props.stores) {
      markers = this.props.stores.map(store => {
        return (
          <Marker key={store.name} position={[store.coordinates.lat, store.coordinates.long]}>
            <Popup>
              <div className='text-center' style={{width: '150px'}}>
                <p className='align-center my-0' style={{fontSize:'18px'}}>{store.name}</p>
                <img src={imageData[store.abbreviation][0]} className='img-fluid'/>
              <button className='btn btn-outline-primary btn-sm mt-3' onClick={ () => {this.props.clicked(store.name)}}>View</button>
              </div>
            </Popup>
          </Marker>
        )

      })
    }


    return (
        <Map style={{height:'500px'}} center={[this.state.position.lat, this.state.position.long]} zoom={this.state.zoom}
             onClick={this.handleClick}
             onLocationfound={this.handleLocationFound}
             ref="map">
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers}
        </Map>
    )
  }
}

export default MapView
