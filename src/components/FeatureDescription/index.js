import React from "react";
import "./FeatureDescription.css";

const FeatureDescription = (props) => {
  return (
    <div className="feature-des-container">
      <span className="fea-des-img-container">
        <img src={props.img} height="20px" alt="water" />
      </span>
      <span>
        <h5>{props.title}</h5>
        <h6>{props.bodyText}</h6>
      </span>
    </div>
  );
};

export default FeatureDescription;
