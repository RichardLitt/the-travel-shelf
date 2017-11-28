import React, { Component } from 'react'
import './StoreIndex.css'
import StoreCard from '../../components/StoreCard/StoreCard'
import '../../components/StoreCard/StoreCard.css'

class StoreIndex extends Component {
  state = {
    stores: null
  }

  componentDidMount() {
    console.log('Didmount')
    fetch('/api/bookstores')
      .then(res => res.json())
      .then(stores => this.setState({ stores }))
      .then(() => console.log(this.state.stores))
  }

  storeSelectHandler = (name) => {
    this.props.history.push({pathname: this.props.match.url + '/' + name})
  }

  render () {
    let stores = null

    if(this.state.stores){
      stores =  this.state.stores.map(store => (
            <StoreCard
              {...store}
              clicked={() => this.storeSelectHandler(store.bookstore.name)}
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

export default StoreIndex
