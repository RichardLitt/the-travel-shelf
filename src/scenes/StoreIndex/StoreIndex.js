import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoreCard from '../../components/StoreCard/StoreCard'
import './StoreIndex.css'
import * as actionCreators from '../../store/actions/index'

class StoreIndex extends Component {

  componentDidMount() {
    this.props.fetchStores();
  }

  storeSelectHandler = (name) => {
    this.props.onStoreSelect(name)
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
                <h1 className='display-4 myhero text-center'>Store Index</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '100px'}}>
        <div className='row justify-content-center'>
            {stores}
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStores: () => dispatch(actionCreators.fetchStores()),
    onStoreSelect: (name) => dispatch(actionCreators.selectStore(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (StoreIndex)