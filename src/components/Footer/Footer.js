import React from "react";
import "./Footer.scss";
import Form from "../EmailForm/EmailForm";

const footer = () => {
  return (
    <footer id="main-footer" className="text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <section id="info" className="py-3">
              <div className="col-12 align-self-center info-map">
                <h3>Want To Know More?</h3>
                <hr align="center" width="30%" />
                <p>
                  Interested in adding a bookstore yourself?<br />
                  Want to join the team?{" "}
                  <em>
                    Get in touch:{" "}
                    <a href="mailto:info@thetravelshelf.com" className="email">
                      info@thetravelshelf.com
                    </a>.
                  </em>
                </p>
                <h4 className="mailing">Join Our Mailing List</h4>
                <p>Keep up-to-date with the latest news!</p>
                <Form />
              </div>
            </section>
            <p>
              Coded with{" "}
              <span>
                <i className="fa fa-heart" aria-hidden="true" />
              </span>{" "}
              in Montreal, Canada &mdash; Copyright 2017 &copy; Travel Shelf
            </p>
            <p className="icons">
              <a href="https://twitter.com/thetravelshelf" className="social">
                <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/thetravelshelf/"
                className="social"
              >
                <i className="fa fa-instagram fa-2x" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/RichardLitt/the-travel-shelf"
                className="social"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
