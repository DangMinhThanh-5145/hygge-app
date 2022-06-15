import React from "react";
import "./CommonTitle.css";

const CommonTile = (props) => {
  return (
    <div className="title-container">
      <h5 className="title-style">{props.title}</h5>
      <h1 className="sub-title-style">{props.subTitle}</h1>
      <h1 className="sub-title-style">{props.subTitle1}</h1>
    </div>
  );
};

export default CommonTile;
