import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import * as imageData from '../../utilities/imageLoader'
import './StoreCard.css'

class storeCard extends Component {
  render () {
    return (
      <div className='card storeCard m-2' style={{width: '25%', minWidth: '300px'}} onClick={this.props.clicked}>
        <img className='card-img-top' style={{height: 'auto'}} src={imageData[this.props.abbreviation][0]} alt='Card image cap' />
        <div className='card-body' style={{fontFamily: 'Ovo', height: '250px'}}>
          <h4 className='card-title py-3 m-0 mb-2 font-weight-bold' align='center' >{this.props.name}</h4>
          <div className='card-text'><Markdown>{this.props.summary}</Markdown></div>
        </div>
      </div>
    )
  }
}

export default storeCard
