/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const QuantityButton = ({ counter, setCounter }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="outlined"
        color="blueColor"
        onClick={() => setCounter((previousState) => previousState - 1)}
      >
        -
      </Button>
      <Typography mx={1} variant="h4">
        {counter}
      </Typography>
      <Button
        variant="outlined"
        color="blueColor"
        onClick={() => setCounter((previousState) => previousState + 1)}
      >
        +
      </Button>
    </Box>
  );
};

QuantityButton.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default QuantityButton;
