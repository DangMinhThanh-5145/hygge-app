import React from "react";
import "./GroupButton.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Theme from "../Theme";

const useStyles = makeStyles({
  btn: {
    height: "40px",
    width: "40px",
  },
});

const GroupButton = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <div className="button-style">
        <Button className={classes.btn} variant="outlined">
          <ArrowLeftIcon color="blackColor" fontSize="large" />
        </Button>
        <Button className={classes.btn} variant="outlined">
          <ArrowRightIcon color="blackColor" fontSize="large" />
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default GroupButton;
