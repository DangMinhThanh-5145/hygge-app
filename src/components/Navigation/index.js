import React from "react";
import CommonButton from "../Commons/CommonButton";
import CommonTile from "../Commons/CommonTile";
import NavigationImage from "../../assets/imgs/natural-6.jpg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <CommonTile
        title="- Skincare Products"
        subTitle="We Offer the Best"
        subTitle1="Product For Your Skin"
      />
      <div className="nav-button-style">
        <CommonButton title="Shop Now" />
      </div>
      <div>
        <img
          src={NavigationImage}
          alt="cosmetic-images"
          className="nav-image"
        />
      </div>
    </div>
  );
};

export default Navigation;
