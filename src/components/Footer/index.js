/* eslint-disable jsx-a11y/alt-text */
import "./Footer.css";
import React from "react";
import FooterItems from "../FooterItems";
import Logo from "../../assets/icons/whaleLogo.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-items-title-container">
          <img src={Logo} height="40px" style={{ marginTop: "10px" }} />
          <h1 className="fti-title-style">Whale Organic</h1>
        </div>
        <h3>© 2020 - All rights reserved</h3>
        <div className="fti-list-icon">
          <span className="fti-image-container">
            <img src={Instagram} height="20px" />
          </span>
          <span className="fti-image-container">
            <img src={Twitter} height="20px" />
          </span>
          <span className="fti-image-container">
            <img src={Facebook} height="20px" />
          </span>
        </div>
      </div>
      <div className="footer-content">
        <FooterItems
          title="Categories"
          subTitle="Featured"
          subTitle1="Marks"
          subTitle2="Eye Care"
          subTitle3="Moisturizers"
          subTitle4="Treatments"
          subTitle5="Night Care"
          subTitle6="Sun Care"
        />
      </div>
      <div className="footer-content">
        <FooterItems
          title="Legal"
          subTitle="Terms Of Services"
          subTitle1="Private Policy"
          subTitle2="Return Policy"
          subTitle3="Shipping"
          subTitle4="Data Protection"
        />
      </div>
      <div className="footer-content">
        <FooterItems
          title="Company"
          subTitle="About"
          subTitle1="Team"
          subTitle2="Contact"
          subTitle3="Careers"
          subTitle4="Vision"
          subTitle5="Culture"
        />
      </div>
    </footer>
  );
};

export default Footer;
