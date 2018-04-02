import React from "react";

const SocialIcon = props => {
  let iconClassName = "fa fa-2x";
  let iconName = props.name;

  if (!props.url) {
    return null;
  }

  switch (iconName) {
    case "twitter":
    case "linkedin":
      iconName += "-square";
      break;
    case "website":
      iconName = "link";
      break;
  }

  if (iconName) {
    iconClassName += " fa-" + iconName;
  }

  return (
    <a href={props.url} className="social">
      <i className={iconClassName} aria-hidden="true" />
    </a>
  );
};

export default SocialIcon;
