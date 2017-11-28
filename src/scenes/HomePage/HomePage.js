import React, { Component } from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'

class Homepage extends Component {
  render () {
    return (
      <div>
        <Hero />
        <section id='home-heading'>
          <div className='dark-overlay'>
            <div className='row'>
              <div className='col'>
                <div className='container leaf'>
                  <h2 className='mb-4'>Welcome To The Travel Shelf</h2>
                  <hr align='center' width='30%' />
                  <p>Montréal and the French language are inextricably linked. You cannot have Quebecois without the city, and you cannot imagine the city without the pervasive French language. This was not always the case. The city was once the center of English Canadian influence <span><a href="bookstores.html">read more...</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='portfolio'>
          <div className='container-fluid'>
            <h2 className='text-center'>Portfolio</h2>
            <hr align='center' width='30%' />
            <p className='text-center header'>Visit Your Local Independent Bookstores Today!</p>
            <div className='row no-gutters container-grid'>

              <div className='col-md-4 portfolio-item'>
                <a className='portfolio-link' href='https://www.drawnandquarterly.com/'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Drawn and Quaterly</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src='img/book6.jpg' className='img-fluid' alt='Book store' />
                </a>
              </div>

              <div className='col-md-8 portfolio-item'>
                <a className='portfolio-link' href='http://bookmanager.ca/argobks/'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Argo Bookshop</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src='img/book1.jpg' className='img-fluid' alt='Book store' />
                </a>
              </div>

              <div className='col-md-8 portfolio-item'>
                <a className='portfolio-link' href='http://www.bibliophilemontreal.com/'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Bibliophile</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src='/img/book2.jpg' className='img-fluid' alt='Book store' />
                </a>
              </div>

              <div className='col-md-4 portfolio-item'>
                <a className='portfolio-link' href='http://www.encorebooks.ca/'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Encore</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src='img/book3.jpg' className='img-fluid' alt='Book store' />
                </a>
              </div>

              <div className='col-md-4 portfolio-item'>
                <a className='portfolio-link' href='http://wordbookstore.ca/'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>The Word</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src='img/book12.jpg' className='img-fluid' alt='Book store' />
                </a>
              </div>
              <div className='col-md-8 portfolio-item'>
                <a className='portfolio-link' href='https://lalibrairiedeverdun.com/'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Librairie De Verdun</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src='img/book4.jpg' className='img-fluid' alt='Book store' />
                </a>
              </div>

            </div>
          </div>
        </section>

        <section id='info' className='py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center info-map'>
                <h3>Want To Know More?</h3>
                <hr align='center' width='30%' />
                <p>Interested in adding a bookstore yourself? <br />
                    Want to join the team?
                    <em>Get in touch: <a href='mailto:info@thetravelshelf.com' className='email'>info@thetravelshelf.com</a></em>

                </p>

                <h4 className='mailing'>Join Our Mailing List</h4>
                <p>Keep up-to-date with the latest news!</p>

                <form action='' className='form-inline justify-content-center'>
                  <div className='col-auto signup'>
                    <label className='sr-only' htmlFor='FormInputGroup'>Sign Up Today</label>

                    <div className='input-group mb-2 mb-sm-0'>
                      <input type='text' className='form-control' id='FormInputGroup' placeholder='Sign Up Today!' />
                      <div className='input-group-addon'>GO</div>
                    </div>
                  </div>
                </form>
              </div>

              <div className='col-md-6 map'>
                <img src='img/worldmap-blk.png' className='img-fluid' alt='Map' />
              </div>
            </div>
          </div>
        </section>

        <footer id='main-footer' className='text-center p-4'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <p>Copyright 2017 &copy; The Travel Shelf</p>
                <p className='icons'>
                  <a href='https://www.facebook.com/' className='social'><i className='fa fa-facebook-square fa-2x' aria-hidden='true' />
                  </a>
                  <a href='https://twitter.com/' className='social'><i className='fa fa-twitter-square fa-2x' aria-hidden='true' />
                  </a>
                  <a href='https://www.instagram.com/' className='social'><i className='fa fa-instagram fa-2x' aria-hidden='true' />
                  </a>
                  <a href='https://github.com/RichardLitt/the-travel-shelf' className='social'><i className='fa fa-github fa-2x' aria-hidden='true' />
                  </a>

                </p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default Homepage
