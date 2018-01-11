import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './Map.css'

import { select, selectAll } from 'd3-selection'
import { queue } from 'd3-queue'
import { json } from 'd3-request'
import { geoPath, geoMercator } from 'd3-geo'

class Map extends Component {

  componentDidMount() {

    const geojsonFiles = [
      {name: 'neighbourhoods', path: 'http://donnees.ville.montreal.qc.ca/dataset/c8f37ad6-16ff-4cdc-9e5a-e47898656fc9/resource/9f68405f-c658-42e1-a786-cb43a29e344e/download/quartierssociologiques2014.json', geojson: ""},
      {name: 'adminRegions', path: 'http://donnees.ville.montreal.qc.ca/dataset/00bd85eb-23aa-4669-8f1b-ba9a000e3dd8/resource/e9b0f927-8f75-458c-8fda-b5da65cc8b73/download/limadmin.json', geojson: ""}
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
        select(this.svg)
          .attr('width', svgWidth)
          .attr('height', svgHeight)
          .append('g')
      )

      const g = svg.append('g')

      const projection = geoMercator()
        .rotate([0, -30, 0]).fitSize([svgWidth, svgHeight], geojsonFiles[0].geojson)

      const path = geoPath()
        .projection(projection)

      g
        .selectAll('.adminRegion')
        .data(geojsonFiles[1].geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .classed('adminRegion', true)

      g
        .selectAll('.neighbourhood')
        .data(geojsonFiles[0].geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .classed('neighbourhood', true)
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
              <svg ref={(elem) => { this.svg = elem }} />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Map