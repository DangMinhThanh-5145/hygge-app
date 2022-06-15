import { Button } from "@mui/material";
import React from "react";

const CommonButton = (props) => {
  const { name, ...restProps } = props;
  return <Button {...restProps}>{name}</Button>;
};

export default CommonButton;
