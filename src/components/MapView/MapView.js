import React, { Component } from 'react'
import { feature } from 'topojson'
import './MapView.css'

import adminRegions from '../../assets/data/limadmin.json'
import storesMontreal from '../../assets/data/osm_montreal_stores.json'
import worldAtlasData from 'world-atlas/world/110m.json'

import * as d3 from 'd3-selection'
import { geoPath, geoMercator } from 'd3-geo'
import { zoom } from 'd3-zoom'

class MapView extends Component {

  componentDidMount() {

    const countries = feature(worldAtlasData, {
      type: "GeometryCollection",
      geometries: worldAtlasData.objects.countries.geometries.filter(el => el.id !== '010')
    })

    //create a method used to bring the active svg to front
    d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
        this.parentNode.appendChild(this)
      })
    }

    const configureZoom = zoom()
      .scaleExtent([1, 5])
      .on('zoom', handleZoom)

    const svgWidth = 960
    const svgHeight = 600

    const svg = (
      d3.select(this.svg)
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append('g')
    )

    const g = svg.append('g')

    function handleZoom(){

      g.attr('transform', d3.event.transform)

      g
        .selectAll('.featuredStores')
        .attr('r', 8 / (d3.event.transform.k) + 'px')

      g
        .selectAll('.stores')
        .attr('r', 8 / (d3.event.transform.k) + 'px')
    }

    const tooltip = (
      d3.select('body')
        .append('div')
        .classed('tooltip', true)
    )

    const projection = geoMercator()
      .rotate([0, -30, 0]).fitSize([svgWidth, svgHeight], countries)

    const path = geoPath()
      .projection(projection)

    g
      .selectAll('.countries')
      .data(countries.features)
      .enter()
      .append('path')
      .classed('countries', true)
      .classed('active', true)
      .attr('d', path)
      .on('click', (d) => console.log(d))

    g
      .selectAll('.adminRegion')
      .data(adminRegions.features)
      .enter()
      .append('path')
      .attr('d', path)
      .classed('adminRegion', true)

    g
      .selectAll('.stores')
      .data(storesMontreal.features)
      .enter()
      .append('circle')
      .classed('stores', true)
      .attr('cx', d => projection(d.geometry.coordinates)[0])
      .attr('cy', d => projection(d.geometry.coordinates)[1])
      .attr('r', '8px')
      .on('mousemove', handleMouseMoveStores)
      .on('mouseout', handleMouseOutStores)

    g
      .selectAll('.featuredStores')
      .data(this.props.stores)
      .enter()
      .append('circle')
      .classed('featuredStores', true)
      .attr('cx', d => projection([d.coordinates.long, d.coordinates.lat])[0])
      .attr('cy', d => projection([d.coordinates.long, d.coordinates.lat])[1])
      .attr('r', '8px')
      .on('mousemove', handleMouseMoveFeaturedStores)
      .on('mouseout', handleMouseOutFeaturedStores)
      .on('click', (d) => {
        tooltip
          .classed('active', false)
        this.props.clicked(d.name)
      })

    function handleMouseMoveStores(d) {
      d3.select(this)
        .classed('active', true)
        .moveToFront()

      tooltip
        .classed('active', true)
        .style('left', (d3.event.pageX) - (tooltip.node().offsetWidth / 2) + 'px')
        .style('top', (d3.event.pageY) - (tooltip.node().offsetHeight + 10) + 'px')
        .html(`<p>${d.properties.name}</p>`)
    }

    function handleMouseOutStores() {
      d3.select(this)
        .classed('active', false)

      tooltip
        .classed('active', false)
    }

    function handleMouseMoveFeaturedStores(d) {
      d3.select(this)
        .classed('active', true)
        .moveToFront()

      tooltip
        .classed('active', true)
        .style('left', (d3.event.pageX) - (tooltip.node().offsetWidth / 2) + 'px')
        .style('top', (d3.event.pageY) - (tooltip.node().offsetHeight + 10) + 'px')
        .html(`<img className='thumbnail' style='width: 200px; height: auto;'  src=${d.thumbnail}>
                 <p>${d.name}</p>`)
    }

    function handleMouseOutFeaturedStores() {
      d3.select(this)
        .classed('active', false)

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
