import React from "react";
import Img from "gatsby-image";
import SocialIcons from "./SocialIcons";

const Person = props => {
  return (
    <div className="col-lg-3">
      <div className="webdeveloper text-center \">
        <Img
          sizes={props.avatar.childImageSharp.sizes}
          className="img-fluid m-auto rounded-circle avatar"
          alt={props.name}
        />
        <h4>{props.name}</h4>
        <p className="text-muted">
          {props.jobTitle}
          <br />
          {props.jobSubTitle}
        </p>
        <p className="bio">{props.bio}</p>
        <SocialIcons list={props.social} />
      </div>
    </div>
  );
};

export default Person;
