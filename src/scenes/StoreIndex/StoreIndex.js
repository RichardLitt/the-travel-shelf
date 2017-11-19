import React, { Component } from 'react'

class BookstoreList extends Component {
  state = {stores: []}

  componentDidMount() {
    fetch('/api/bookstores')
      .then(res => res.json())
      .then(stores => this.setState({ stores }));
  }
  render () {
    let stores =  this.state.stores.map(store =>
      <div key={store._id}>
        <h1>{store.name}</h1>
        {store.review.map((paragraph, index) => <p key={index} >{paragraph}</p>)}
        <p>url: {store.websiteUrl}</p>
        <p>GoogleMaps: {store.locationUrl}</p>
        <ul>
          <li>coffee : {store.coffee ? 'True' : 'False'}</li>
          <li>wifi : {store.wifi ? 'True' : 'False'}</li>
          <li>plugs : {store.plugs ? 'True' : 'False'}</li>
          <li>event : {store.events ? 'True' : 'False'}</li>
        </ul>
      </div>
    )
    return (
      <div className="container">
        <header className='Index-header'>
          <h1 className='Index-title' style={{textAlign: 'center'}}>Store Index</h1>
        </header>
        <section>
          {stores}
        </section>
      </div>
    )
  }
}

export default BookstoreList
