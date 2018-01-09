import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './About.css'

class About extends Component {
  render () {
    return (
      <div>
        <section id='about-bookstore' className='py-5 text-white' data-type='background' data-speed='2'>
          <div className='primary-overlay'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col text-center'>
                  <h1 className='display-4 myhero text-center'>About</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <p className='description'>
                  <b>The Travel Shelf</b> is a joint enterprise by Richard Littauer and students from Les Pitonneux &ndash; LAB12, an alternative bootcamp program in Montréal, Canada. <a href='https://burntfen.com' className='dev'>Richard</a> goes to a lot of bookstores, and wanted a way to talk about those bookstores. The students - <a href='https://www.linkedin.com/in/vernon-lillies-ing-a3172270/' className='dev'>Vernon,</a> <a href='https://www.linkedin.com/in/joannakats/' className='dev'> Joanna</a> and <a href='https://www.linkedin.com/in/honeyjafari/' className='dev'> Hanie</a>
                        &mdash; wanted to build a website together.
                        This is the result.
                      </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <p className='join'>Interested in adding a bookstore, yourself? Want to join the team?
                    Get in touch.
                    <a href='mailto:info@thetravelshelf.com' className='info'>info@thetravelshelf.com.</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='team'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='webdeveloper text-center'>
                  <img src='img/richard.jpg' className='img-fluid rounded-circle avatar' alt='Richard' />
                  <h4>Richard Littauer</h4>
                  <p className='text-muted'>Founder,<br /> Web Developer</p>
                  <p className='bio'>Full stack developer, nomad, poet, sailor, linguist, writer, and runner. Always making new projects, always iterating on the old ones.</p>
                  <p className='icons'>
                    <a href='https://github.com/RichardLitt' className='social'><i className='fa fa-github fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://twitter.com/richlitt' className='social'><i className='fa fa-twitter-square fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://www.linkedin.com/in/richard-littauer-130026138/' className='social'><i className='fa fa-linkedin-square fa-2x' aria-hidden='true' />
                      </a>
                  </p>
                </div>
              </div>

              <div className='col-lg-3'>
                <div className='webdeveloper text-center'>
                  <img src='img/vernon.jpg' className='img-fluid rounded-circle avatar' alt='Vernon' />
                  <h4>Vernon Lillies</h4>
                  <p className='text-muted'>Full Stack <br />Web Developer</p>
                  <p className='bio'>Full stack developer with a passion for applying technology to solve real world problems. Flying robots, renewable energy, construction…</p>
                  <p className='icons'>
                    <a href='https://github.com/VernL' className='social'><i className='fa fa-github fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://twitter.com/' className='social'><i className='fa fa-twitter-square fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://www.linkedin.com/in/vernon-lillies-ing-a3172270/' className='social'><i className='fa fa-linkedin-square fa-2x' aria-hidden='true' />
                      </a>
                  </p>
                </div>
              </div>

              <div className='col-lg-3'>
                <div className='webdeveloper text-center'>
                  <img src='img/ioanna.jpg' className='img-fluid rounded-circle avatar' alt='Ioanna' />
                  <h4>Joanna Katsifaraki</h4>
                  <p className='text-muted'>Front End Developer,<br />Designer</p>
                  <p className='bio'>Love designing, coding and developing responsive websites, drinking lattes, green tea, listening to lounge, jazz, running and playing tennis.</p>
                  <p className='icons'>
                    <a href='https://github.com/Jojokats' className='social'><i className='fa fa-github fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://twitter.com/Joanna_Kts' className='social'><i className='fa fa-twitter-square fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://www.linkedin.com/in/joannakats/' className='social'><i className='fa fa-linkedin-square fa-2x' aria-hidden='true' />
                      </a>
                  </p>
                </div>
              </div>

              <div className='col-lg-3'>
                <div className='webdeveloper text-center'>
                  <img src='img/hanie.png' className='img-fluid rounded-circle avatar' alt='Hanie' />
                  <h4>Hanie Jafari</h4>
                  <p className='text-muted'>Full Stack <br />Web Developer</p>
                  <p className='bio'>
Full-stack developer, UX/UI follower, Marketing, Strategy, startups. Loves innovative solutions. Always excited to learn more. Enjoys Yoga, swimming, cooking and hanging out with friends.</p>
                  <p className='icons'>
                    <a href='https://github.com/ZJaf' className='social'><i className='fa fa-github fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://twitter.com/' className='social'><i className='fa fa-twitter-square fa-2x' aria-hidden='true' />
                      </a>
                    <a href='https://www.linkedin.com/in/honeyjafari/' className='social'><i className='fa fa-linkedin-square fa-2x' aria-hidden='true' />
                      </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default About
