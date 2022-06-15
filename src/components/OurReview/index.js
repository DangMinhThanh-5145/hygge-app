import React from "react";
import Card from "../Card";
import CommonTile from "../Commons/CommonTile";
import GroupButton from "../GroupButton";
import "./OurReview.css";

const OurReview = () => {
  return (
    <div className="our-review-container">
      <CommonTile title="- Our reviews" subTitle="What Customers are saying" />
      <div className="review-content">
        <Card
          title="Amy Smith"
          review="This is the best website I have ordered something from. I highly recommend."
        />
        <div className="review-button-style">
          <GroupButton />
        </div>
      </div>
    </div>
  );
};

export default OurReview;
