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
      <div className="container">
        <header className='Index-header'>
          <h1 className='Index-title' style={{textAlign: 'center'}}>Store Index</h1>
        </header>
        <section>
          <div className='row'>
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