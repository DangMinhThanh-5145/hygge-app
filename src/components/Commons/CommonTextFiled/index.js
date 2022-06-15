import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../../Theme";
import React from "react";
import "./CommonTextFiled.css";

const CommonTextFiled = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <TextField
        fullWidth
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        id={props.id}
        sx={props.sx}
        variant={props.variant}
        color={props.color}
        type={props.type}
      />
    </ThemeProvider>
  );
};

export default CommonTextFiled;
