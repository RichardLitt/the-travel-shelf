import React from "react";
import SocialIcon from "./SocialIcon";

const SocialIcons = props => {
  const icons = Object.keys(props.list).map(key => {
    const url = props.list[key];

    if (!url) {
      return null;
    }

    return <SocialIcon key={key} name={key} url={url} />;
  });

  return <p className="icons">{icons}</p>;
};

export default SocialIcons;
