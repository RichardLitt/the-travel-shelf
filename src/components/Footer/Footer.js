import React from 'react'

const footer = () => {
  return (
    <footer id='main-footer' className='text-center p-4'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p>Coded with <span><i className='fa fa-heart' aria-hidden='true' /></span> in Montreal, Canada &mdash; Copyright 2017 &copy; Travel Shelf</p>
            <p className='icons'>
              <a href='https://github.com/RichardLitt/the-travel-shelf' className='social'><i className='fa fa-github fa-2x' aria-hidden='true' />
              </a>
              <a href='https://www.facebook.com/' className='social'><i className='fa fa-facebook-square fa-2x' aria-hidden='true' />
              </a>
              <a href='https://twitter.com/' className='social'><i className='fa fa-twitter-square fa-2x' aria-hidden='true' />
              </a>
              <a href='https://www.linkedin.com/' className='social'><i className='fa fa-instagram fa-2x' aria-hidden='true' />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
