import React, { Component } from 'react'
import './MapView.css'

import adminRegions from '../../assets/data/limadmin.json'
import policeStations from '../../assets/data/pdq_point.json'

import * as d3 from 'd3-selection'
import { geoPath, geoMercator } from 'd3-geo'

class MapView extends Component {

  componentDidMount() {

    const svgWidth = 960
    const svgHeight = 600

    const svg = (
      d3.select(this.svg)
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append('g')
    )

    const g = svg.append('g')

    const tooltip = (
      d3.select('body')
        .append('div')
        .classed('tooltip', true)
    )

    const projection = geoMercator()
      .rotate([0, -30, 0]).fitSize([svgWidth, svgHeight], adminRegions)

    const path = geoPath()
      .projection(projection)

    g
      .selectAll('.adminRegion')
      .data(adminRegions.features)
      .enter()
      .append('path')
      .attr('d', path)
      .classed('adminRegion', true)

    g
      .selectAll('.stations')
      .data(policeStations.features)
      .enter()
      .append('path')
      .attr('d', path)
      .classed('stations', true)
      .on('mousemove', handleMouseMoveStations)
      .on('mouseout', handleMouseOutStations)

    g
      .selectAll('.bookstores')
      .data(this.props.stores)
      .enter()
      .append('circle')
      .classed('bookstores', true)
      .attr('cx', d => projection([d.coordinates.long, d.coordinates.lat])[0])
      .attr('cy', d => projection([d.coordinates.long, d.coordinates.lat])[1])
      .attr('r', '8px')
      .on('mousemove', handleMouseMoveStores)
      .on('mouseout', handleMouseOutStores)
      .on('click', (d) => {
        tooltip
          .classed('active', false)
        this.props.clicked(d.name)
      })

    function handleMouseMoveStations(d) {
      tooltip
        .classed('active', true)
        .style('left', (d3.event.pageX) - (tooltip.node().offsetWidth / 2) + 'px')
        .style('top', (d3.event.pageY) - (tooltip.node().offsetHeight + 10) + 'px')
        .html(`<p>${d.properties.DESC_LIEU}</p>`)
    }

    function handleMouseOutStations() {
      tooltip
        .classed('active', false)
    }

    function handleMouseMoveStores(d) {
      tooltip
        .classed('active', true)
        .style('left', (d3.event.pageX) - (tooltip.node().offsetWidth / 2) + 'px')
        .style('top', (d3.event.pageY) - (tooltip.node().offsetHeight + 10) + 'px')
        .html(`<img className='thumbnail' style='width: 200px; height: auto;'  src=${d.thumbnail}>
                 <p>${d.name}</p>`)
    }

    function handleMouseOutStores() {
      tooltip
        .classed('active', false)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render () {
    return (
      <section id='map'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center'>
            <h1>Montreal</h1>
          </div>
          <div className='col-12 text-center'>
            <svg ref={(elem) => { this.svg = elem }} />
            <div className='tooltip' ref={(elem) => { this.div = elem }} />
          </div>
        </div>
      </section>
    )
  }
}

export default MapView
