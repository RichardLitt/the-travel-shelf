import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "./StoreCard.scss";

class storeCard extends Component {
  render() {
    return (
      <Link
        to={this.props.slug}
        style={{
          textDecoration: `none`,
          color: `inherit`,
          width: "33%",
          minWidth: "300px"
        }}
      >
        <div className="card storeCard">
          <Img
            style={{ height: "100%" }}
            className="card-img-top"
            sizes={this.props.thumbnail}
            alt="storefront"
          />
          <div
            className="card-body"
            style={{ fontFamily: "Ovo", height: "250px" }}
          >
            <h4
              className="card-title py-3 m-0 mb-2 font-weight-bold"
              align="center"
            >
              {this.props.title}
            </h4>
            <div className="card-text">{this.props.excerpt}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default storeCard;
