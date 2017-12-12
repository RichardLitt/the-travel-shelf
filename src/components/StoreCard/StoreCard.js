import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import './StoreCard.css'

class storeCard extends Component {
  render () {
    return (
      <div onClick={this.props.clicked} className='col-lg-4 col-md-6 col-sm-12 my-3'>
        <div className='card Store-card'>
          <img className='card-img-top' style={{height: '20rem'}} src={this.props.thumbnail} alt='Card image cap' />
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
