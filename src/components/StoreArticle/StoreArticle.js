import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import Form from '../EmailForm/EmailForm'
import * as imageData from '../../utilities/imageLoader'
import './StoreArticle.scss'

class storeArticle extends Component {
  render () {
    let images = imageData[this.props.abbreviation].map(image => {
      return <img key={image} src={image} style={{maxWidth: '30%', height: 'auto'}} className='img-thumbnail' alt='store'/>
    })
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
            <div className='row justify-content-center' id='primary'>
              <main id='content' className='col-md-8'>
                <article className='post' style={{padding: '30px 20px', marginBottom: '40px'}}>
                  <Markdown>{this.props.review}</Markdown>
                </article>
                <div className='post' style={{padding: '30px 20px', marginBottom: '40px', textAlign: 'center'}}>
                  <h4 className='connect'>Images</h4>
                    {images}
                </div>
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
                    {(this.props.social.twitter ? <a href={this.props.social.twitter}><i className='fa fa-twitter-square' /></a> : null)}
                    {(this.props.social.facebook ? <a href={this.props.social.facebook}><i className='fa fa-facebook-square' /></a> : null)}
                    {(this.props.social.instagram ? <a href={this.props.social.instagram}><i className='fa fa-instagram' /></a> : null)}
                  </p>
                </div>

                <div className='widget'>
                  <h4 className='connect'>Amenities</h4>
                  <p className='social'>
                    {(this.props.amenities.coffee ? <i className='fa fa-coffee' aria-hidden='true' /> : null)}
                    {(this.props.amenities.wifi ? <i className='fa fa-wifi' aria-hidden='true' /> : null)}
                    {(this.props.amenities.plug ? <i className='fa fa-plug' aria-hidden='true' /> : null)}
                    {(this.props.amenities.calendar ? <i className='fa fa-calendar' aria-hidden='true' /> : null)}
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
