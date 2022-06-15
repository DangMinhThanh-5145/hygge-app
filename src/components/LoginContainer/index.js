/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommonTile from "../Commons/CommonTile";
import LoginForm from "../LoginForm";
import React from "react";
import FormImage from "../../assets/imgs/natural.jpg";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#F6F7FB",
    marginLeft: 100,
    marginRight: 100,
    display: "flex",
    borderRadius: 5,
  },
});

const LoginContainer = () => {
  const classes = useStyles();
  return (
    <>
      <CommonTile title="- Login" subTitle="Login to Your Account" />
      <Box className={classes.box}>
        <Box>
          <img
            src={FormImage}
            style={{
              height: "700px",
              width: "650px",
              borderRadius: "5px 0px 0px 5px",
            }}
          />
        </Box>
        <Box>
          <LoginForm />
        </Box>
      </Box>
    </>
  );
};

export default LoginContainer;
