import React from "react";
import "./WhyUsItem.css";

const WhyUsItems = (props) => {
  return (
    <div>
      <div className="ws-item-icon-container">
        <p className="icon-position">{props.icon}</p>
      </div>
      <h1 className="ws-item-title-style">{props.title}</h1>
      <h4 className="ws-item-des-style">{props.description}</h4>
    </div>
  );
};

export default WhyUsItems;
