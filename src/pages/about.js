import React, { Component } from "react";
import Team from "../components/Team/Team";
import "./about.scss";

class About extends Component {
  render() {
    return (
      <div>
        <section
          id="about-bookstore"
          className="py-5 text-white"
          data-type="background"
          data-speed="2"
        >
          <div className="primary-overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col text-center">
                  <h1 className="display-4 myhero text-center">About</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <p className="description">
                  <b>The Travel Shelf</b> is a joint enterprise by Richard
                  Littauer and students from Les Pitonneux &ndash; LAB12, an
                  alternative bootcamp program in Montréal, Canada.{" "}
                  <a href="https://burntfen.com" className="dev">
                    Richard
                  </a>{" "}
                  goes to a lot of bookstores, and wanted a way to talk about
                  those bookstores. The students -{" "}
                  <a
                    href="https://www.linkedin.com/in/vernon-lillies-ing-a3172270/"
                    className="dev"
                  >
                    Vernon,
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/joannakats/"
                    className="dev"
                  >
                    {" "}
                    Joanna
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.linkedin.com/in/honeyjafari/"
                    className="dev"
                  >
                    {" "}
                    Hanie
                  </a>
                  &mdash; wanted to build a website together. This is the
                  result.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <p className="join">
                  Interested in adding a bookstore, yourself? Want to join the
                  team? Get in touch.
                  <a href="mailto:info@thetravelshelf.com" className="info">
                    info@thetravelshelf.com.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Team edges={this.props.data.allTeamJson.edges} />
      </div>
    );
  }
}

export default About;

export const query = graphql`
  query TeamQuery {
    allTeamJson {
      edges {
        node {
          name
          jobTitle
          jobSubTitle
          bio
          social {
            github
            twitter
            linkedin
          }
          avatar {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`;
