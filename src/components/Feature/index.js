import CommonTile from "../Commons/CommonTile";
import FeatureDescription from "../FeatureDescription";
import React from "react";
import "./Feature.css";
import Water from "../../assets/icons/water.svg";
import Shield from "../../assets/icons/shield.svg";
import Arrow from "../../assets/icons/arrow.svg";

const Feature = () => {
  return (
    <div className="product-features">
      <div className="left-content">
        <CommonTile
          title="- Product Features"
          subTitle="Explore the Features"
        />
      </div>
      <div className="right-content">
        <FeatureDescription
          title="Natural"
          bodyText="We are using natural ingredients only when creating our products."
          img={Water}
        />
        <FeatureDescription
          title="Full Protection"
          bodyText="This product provides broad spectrum SPF 50 and blue light protection."
          img={Shield}
        />
        <FeatureDescription
          title="Trending"
          bodyText="It is one of our most popular products that we have on offer."
          img={Arrow}
        />
      </div>
    </div>
  );
};

export default Feature;
