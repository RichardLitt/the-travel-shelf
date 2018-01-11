import React, {Component} from 'react'
import Footer from '../../components/Footer/Footer'
import './Map.css'

import {select, selectAll} from "d3-selection"

class Map extends Component {

  componentDidMount() {
    const svgWidth = 960
    const svgHeight = 600
    const svg = (
      select(this.svg)
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append('g')
    )
  }

  shouldComponentUpdate() {
    return false; // This prevents future re-renders of this component
  }

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

        <svg ref={(elem) => { this.svg = elem }} />

        <Footer />
      </div>
    )
  }
}

export default Map