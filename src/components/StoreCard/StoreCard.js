import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import * as imageData from '../../utilities/imageLoader'
import './StoreCard.css'

class storeCard extends Component {
  render () {
    return (
      <div onClick={this.props.clicked} className='col-xl-3 col-lg-4 col-md-6 col-sm-12 my-3'>
        <div className='card Store-card'>
          <img className='card-img-top img-thumbnail' style={{height: '20rem'}} src={imageData[this.props.abbreviation][0]} alt='Card image cap' />
          <div className='card-body' style={{fontFamily: 'Ovo', color: '#212529', height: '250px'}}>
            <h4 className='card-title py-3 m-0 mb-2' align='center' style={{backgroundColor: '#212529', color: 'white', fontFamily: 'Ovo'}} >{this.props.name}</h4>
            <div className='card-text'><Markdown>{this.props.summary}</Markdown></div>
          </div>
        </div>
      </div>
    )
  }
}

export default storeCard
