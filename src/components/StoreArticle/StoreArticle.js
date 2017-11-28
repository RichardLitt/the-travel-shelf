import React, { Component } from 'react'
import Markdown from 'react-remarkable'
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
                  <h1 className='display-4 myhero text-center'>{this.props.bookstore.name}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='blog-bookstore'>
          <div className='container'>
            <div className='row' id='primary'>
              <main id='content' className='col-md-8'>

                <article className='post'>
                  <Markdown>{this.props.bookstore.review}</Markdown>
                </article>
              </main>
              <aside className='col-md-4'>
                <div className='widget'>
                  <h4>Join Our Mailing List</h4>
                  <p>Keep up-to-date with the latest news!</p>
                  <form>
                    <div className='row'>
                      <div className='form-row align-items-center'>
                        <div className='col-xs-3 theInput'>
                          <div className='input-group mb-2 mb-sm-0'>
                            <input className='form-control form-control-sm' type='text' placeholder='Sign Up Today' />
                            <div className='input-group-addon'>GO</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className='widget'>
                  <h4 className='connect'>Info</h4>
                  <p className='address'><strong>{this.props.bookstore.name}</strong></p>
                  <p className='address'>{this.props.bookstore.postalAddress.streetAddress}</p>
                  <p className='address'>{this.props.bookstore.postalAddress.addressLocality}, {this.props.bookstore.postalAddress.addressRegion} {this.props.bookstore.postalAddress.postalCode}</p>
                  <p className='address'>{this.props.bookstore.postalAddress.addressCountry}</p>
                  <p className='address'>{this.props.bookstore.telephone}</p>
                  <p className='social'>
                    {(this.props.bookstore.social.twitter ? <a href={this.props.bookstore.social.twitter}><i className='fa fa-twitter-square' aria-hidden='true' /></a> : null)}
                    {(this.props.bookstore.social.facebook ? <a href={this.props.bookstore.social.facebook}><i className='fa fa-facebook-square' aria-hidden='true' /></a> : null)}
                    {(this.props.bookstore.social.instagram ? <a href={this.props.bookstore.social.instagram}><i className='fa fa-instagram' aria-hidden='true' /></a> : null)}
                  </p>
                </div>

                <div className='widget'>
                  <h4 className='connect'>Amenities</h4>
                  <p className='social'>
                    {(this.props.bookstore.amenities.coffee ? <a><i className='fa fa-coffee' aria-hidden='true' /></a> : null)}
                    {(this.props.bookstore.amenities.wifi ? <a><i className='fa fa-wifi' aria-hidden='true' /></a> : null)}
                    {(this.props.bookstore.amenities.wifi ? <a><i className='fa fa-plug' aria-hidden='true' /></a> : null)}
                    {(this.props.bookstore.amenities.wifi ? <a><i className='fa fa-calendar' aria-hidden='true' /></a> : null)}
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
