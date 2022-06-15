/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./FooterItems.css";

const FooterItems = (props) => {
  return (
    <div>
      <div className="footer-items-title-container">
        <img src={props.icon} height="40px" />
        <h1 className="fti-title-style">{props.title}</h1>
      </div>
      <h3 className="fti-sub-style">{props.subTitle}</h3>
      <h3 className="fti-sub-style">{props.subTitle1}</h3>
      <h3 className="fti-sub-style">{props.subTitle2}</h3>
      <h3 className="fti-sub-style">{props.subTitle3}</h3>
      <h3 className="fti-sub-style">{props.subTitle4}</h3>
      <h3 className="fti-sub-style">{props.subTitle5}</h3>
      <h3 className="fti-sub-style">{props.subTitle6}</h3>
    </div>
  );
};

export default FooterItems;
