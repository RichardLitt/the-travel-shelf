import React, { Component } from 'react'
import './ContactPage.css'
import Footer from '../../components/Footer/Footer'


class ContactPage extends Component {
  render () {
    return (
      <div>

        <section id="contact" className="py-5 text-white">
          <div className="primary-overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col text-center">
                	<h1 className="display-4 myhero text-center">Contact</h1>
                </div>
              </div>
            </div>
          </div>
        </section>


          <section id="contact-us">
            <div className="container">

              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <p className="description"><span>The Travel Shelf</span> is a joint enterprise by Richard Littauer and students from Les Pitonneux &ndash; LAB12, an alternative bootcamp program in Montréal, Canada. Richard goes to a lot of bookstores, and wanted a way to talk about those bookstores. The students - Vernon, Joanna, Hanie, and Jose - wanted to build a website together.
                    This is the result.</p>

                    <p>Interested in adding a bookstore, yourself? Want to join the team?
                    Get in touch.
                    <a href="mailto:info@thetravelshelf.com" className="info">info@thetravelshelf.com.</a>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md"></div>
                  <div className="col-md">
                      <img src="img/icon-books.svg" alt="icon-books" className="icon-books" />
                  </div>
                  <div className="col-md"></div>
                </div>

              </div>
          </section>

          <Footer />
      </div>
    )
  }
}

export default ContactPage
