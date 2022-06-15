import React from "react";
import CommonTile from "../Commons/CommonTile";
import CommonTextFiled from "../Commons/CommonTextFiled";
import "./Newsletter.css";
import CommonButton from "../Commons/CommonButton";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="news-style">
        <CommonTile
          title="Our Newsletter"
          subTitle="Sign Up to our Newsletter"
        />
      </div>
      <div className="newsletter-from">
        <CommonTextFiled
          label="Your Email"
          id="your-email"
          color="blueTextFiled"
          sx={{ width: "496px" }}
        />
        <CommonButton
          name="Sign Up"
          color="blueColor"
          variant="outlined"
          sx={{
            height: "55px",
            width: "150px",
            fontSize: "15px",
            color: "#3498DB",
            padding: "10px",
            marginLeft: "50px",
            borderRadius: "5px",
            marginBottom: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Newsletter;
