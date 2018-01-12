import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './Map.css'

import * as d3 from 'd3-selection'
import { queue } from 'd3-queue'
import { json } from 'd3-request'
import { geoPath, geoMercator } from 'd3-geo'

class Map extends Component {

  componentDidMount() {

    console.log(d3)

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
        d3.select('.tooltip')
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

      function handleMouseMoveStations(d) {
        tooltip
          .classed('active', true)
          .style('left', d3.mouse(svg.node())[0] + 10 + 'px')
          .style('top', d3.mouse(svg.node())[1] - (tooltip.node().offsetHeight + 10) + 'px')
          .html(`<p>${d.properties.DESC_LIEU}</p>`)
      }

      function handleMouseOutStations() {
        tooltip
          .classed('active', false)
      }
    }
  }

  shouldComponentUpdate() {
    return false
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

        <section id='map'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <h1>Montreal</h1>
              </div>
              <div className='col-12 text-center'>
                <svg ref={(elem) => { this.svg = elem }} />
                <div className='tooltip' ref={(elem) => { this.div = elem }} />
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