// Some type of container

import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // to access Card component's classname

  return <div className={classes}>{props.children}</div>;
};

export default Card;
