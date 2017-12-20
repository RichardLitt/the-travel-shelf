import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import Form from '../EmailForm/EmailForm'
import './StoreArticle.scss'

class storeArticle extends Component {
  render () {
    return (
      <div>
        <section id='hero-bookstore' className='py-5 text-white' data-type='background' data-speed='2'>
          <div className='primary-overlay'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col text-center'>
                  <h1 className='display-4 myhero text-center'>{this.props.name}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='blog-bookstore'>
          <div className='container'>
            <div className='row' id='primary'>
              <main id='content' className='col-md-8'>

                <article className='post' style={{padding: '30px 20px', marginBottom: '40px'}}>
                  <Markdown>{this.props.review}</Markdown>
                </article>
              </main>
              <aside className='col-md-4'>
                <div className='widget'>
                  <h4>Join Our Mailing List</h4>
                  <p>Keep up-to-date with the latest news!</p>
                  <Form />
                </div>

                <div className='widget'>
                  <h4 className='connect'>Info</h4>
                  <p className='address'><strong>{this.props.name}</strong></p>
                  <p className='address'>{this.props.postalAddress.streetAddress}</p>
                  <p className='address'>{this.props.postalAddress.addressLocality}, {this.props.postalAddress.addressRegion} {this.props.postalAddress.postalCode}</p>
                  <p className='address'>{this.props.postalAddress.addressCountry}</p>
                  <p className='address'>{this.props.telephone}</p>
                  <p className='social'>
                    {(this.props.social.twitter ? <a href={this.props.social.twitter}><i className='fa fa-twitter-square' aria-hidden='true' /></a> : null)}
                    {(this.props.social.facebook ? <a href={this.props.social.facebook}><i className='fa fa-facebook-square' aria-hidden='true' /></a> : null)}
                    {(this.props.social.instagram ? <a href={this.props.social.instagram}><i className='fa fa-instagram' aria-hidden='true' /></a> : null)}
                  </p>
                </div>

                <div className='widget'>
                  <h4 className='connect'>Amenities</h4>
                  <p className='social'>
                    {(this.props.amenities.coffee ? <a><i className='fa fa-coffee' aria-hidden='true' /></a> : null)}
                    {(this.props.amenities.wifi ? <a><i className='fa fa-wifi' aria-hidden='true' /></a> : null)}
                    {(this.props.amenities.wifi ? <a><i className='fa fa-plug' aria-hidden='true' /></a> : null)}
                    {(this.props.amenities.wifi ? <a><i className='fa fa-calendar' aria-hidden='true' /></a> : null)}
                  </p>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default storeArticle
