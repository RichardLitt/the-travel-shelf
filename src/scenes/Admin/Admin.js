import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Footer from '../../components/Footer/Footer'

class Admin extends Component {
  render () {
    return (
      <div>
        <h1>hello</h1>
        <Footer />
      </div>
    )
  }
}

export default reduxForm({ form: 'submitStoreForm' })(Admin)
