import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoreArticle from '../../components/StoreArticle/StoreArticle'
import Footer from '../../components/Footer/Footer'
import './Store.css'

class Store extends Component {
  render () {
    let content = null

    if (this.props.store) {
      content = (
        <StoreArticle {...this.props.store} />
      )
    }

    return (
      <div>
        {content}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state.selectedStore
  }
}

export default connect(mapStateToProps)(Store)
