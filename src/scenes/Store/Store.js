import React, { Component } from 'react'
import './Store.css'
import StoreArticle from '../../components/StoreArticle/StoreArticle'

class Store extends Component {

  state = {
    store: null,
    name: ''
  }

  componentWillMount() {
    this.setState({name: this.props.match.params.Store})
    console.log('willMount')
  }

  componentDidMount() {
    console.log(this.state.name)
    fetch('/api/bookstores/' + this.state.name )
      .then(res => res.json())
      .then(store => this.setState({ store }))
  }


  render () {

    let content = null;

    if(this.state.store){
      content = (
        <StoreArticle {...this.state.store}/>
      )
    }


    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Store
