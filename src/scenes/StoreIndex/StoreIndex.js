import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoreCard from '../../components/StoreCard/StoreCard'
import Footer from '../../components/Footer/Footer'
import './StoreIndex.css'

class StoreIndex extends Component {

  storeSelectHandler = (name) => {
    this.props.history.push({pathname: this.props.match.url + '/' + name})
  }

  render () {
    let stores = null

    if(this.props.stores){
      stores =  this.props.stores.map(store => (
            <StoreCard
              {...store}
              clicked={() => this.storeSelectHandler(store.name)}
            />
        )
      )
    }

    return (
      <div>
        <section id='index-bookstore' className='py-5 text-white' data-type='background' data-speed='2'>
          <div className='primary-overlay'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col text-center'>
                  <h1 className='display-4 myhero text-center'>Stores</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{padding: '100px'}}>
          <div className='row justify-content-center'>
            <div className='col d-flex flex-wrap justify-content-around'>
              {stores}
            </div>
            </div>
        </section>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(mapStateToProps) (StoreIndex)