import React, { Component } from 'react'
import './MapView.css'

import * as d3 from 'd3-selection'
import { queue } from 'd3-queue'
import { json } from 'd3-request'
import { geoPath, geoMercator } from 'd3-geo'

class MapView extends Component {

  componentDidMount() {

    console.log(this.props.stores)

    const geojsonFiles = [
      {name: 'adminRegions', path: 'http://donnees.ville.montreal.qc.ca/dataset/00bd85eb-23aa-4669-8f1b-ba9a000e3dd8/resource/e9b0f927-8f75-458c-8fda-b5da65cc8b73/download/limadmin.json', geojson: ""},
      {name: 'policeStations', path: 'http://donnees.ville.montreal.qc.ca/dataset/91f66001-b461-4f63-aff4-cddc0fe30ffe/resource/c9d0b8d6-c7a6-4766-a5cc-98e8b1392bbc/download/pdq_point.geojson', geojson: ""}
    ]

    loadGeojsonFilesAndRunMain()

    function loadGeojsonFilesAndRunMain () {
      let q = queue()
      for (let file of geojsonFiles) {
        q.defer(json, file.path)
      }

      q.awaitAll((err, files) => {
        if (err) {
          throw err
        } else {
          loadGeojsonFiles(files)
          main()
        }
      })
    }

    function loadGeojsonFiles(files) {
      geojsonFiles.map((file, i) => file.geojson = files[i])
    }

    const main = () => {

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
        .rotate([0, -30, 0]).fitSize([svgWidth, svgHeight], geojsonFiles[0].geojson)

      const path = geoPath()
        .projection(projection)

      g
        .selectAll('.adminRegion')
        .data(geojsonFiles[0].geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .classed('adminRegion', true)

      g
        .selectAll('.stations')
        .data(geojsonFiles[1].geojson.features)
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
