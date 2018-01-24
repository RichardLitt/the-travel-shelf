import React, { Component } from 'react'
import './NotFoundPage.css'
import Footer from '../../components/Footer/Footer'

class NotFoundPage extends Component {
  render () {
    return (
      <div>
        <section id='not-found'>
          <div className='container-fluid'>
            <h2 className='text-center'>Page Not Found</h2>
            <hr align='center' width='30%' />
            <p className='text-center header'>Sorry, we couldn't find the page you're looking for!</p>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default NotFoundPage
