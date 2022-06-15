import CommonButton from "../Commons/CommonButton";
import CommonTextFiled from "../Commons/CommonTextFiled";
import React from "react";
import "./DetailsForm.css";

const DetailsForm = () => {
  return (
    <div className="details-form-container">
      <h1>Details</h1>
      <p>Email Address</p>
      <CommonTextFiled label="Email Address" />
      <p>Password</p>
      <CommonTextFiled label="Password" type="password" />
      <CommonButton
        name="Continue"
        variant="contained"
        color="darkGreen"
        sx={{
          backgroundColor: "#00CC96",
          height: "45px",
          width: "550px",
          color: "#FFFFFF",
          borderRadius: "30px",
          fontSize: "10px",
          fontWeight: "bold",
          marginTop: "60px",
        }}
      />
      <CommonButton
        name="Guest Checkout"
        variant="outlined"
        color="darkGrey"
        sx={{
          backgroundColor: "#E5E7E9",
          height: "45px",
          width: "550px",
          color: "black",
          fontSize: "10px",
          borderRadius: "30px",
          fontWeight: "bold",
          marginTop: "30px",
        }}
      />
    </div>
  );
};

export default DetailsForm;
