import React from "react";
import "./WhyUs.css";
import CommonTile from "../Commons/CommonTile";
import WhyUsItems from "../WhyUsItem";

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <div className="style">
        <CommonTile title="- Why Us" subTitle="Why People Choose Us" />
      </div>
      <div className="ws-card-container">
        <div className="ws-card">
          <WhyUsItems
            icon={
              <img src="assets/box-return.svg" alt="menu-logo" height="30px" />
            }
            title="Easy Return"
            description="Our return policy is simple and that is why customers love our shop."
          />
        </div>
        <div className="ws-card">
          <WhyUsItems
            icon={<img src="assets/man.svg" alt="menu-logo" height="30px" />}
            title="Customer Services"
            description="We offer amazing customer service no matter what happens."
          />
        </div>
        <div className="ws-card">
          <WhyUsItems
            icon={<img src="assets/star.svg" alt="menu-logo" height="30px" />}
            title="Hight Quality"
            description="All of our products go through very strict inspection before we dispatch them."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
