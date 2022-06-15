/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
import CommonButton from "../Commons/CommonButton";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { getColorByCategory } from "../../utils";

const ProductItems = (props) => {
  const classes = useStyles();
  const { product } = props;
  return (
    <>
      <Box className={classes.box}>
        <img src={product.img} alt="image" className={classes.img} />
        <Box sx={{ mt: 2, ml: 2 }}>
          <CommonButton
            name={product.category}
            color={getColorByCategory(product.category)}
            variant="outlined"
            sx={{
              width: "120px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          />
        </Box>
        <Box sx={{ mt: 2, ml: 2 }}>
          <RouterLink
            color="inherit"
            component={RouterLink}
            to={product.id}
            className={classes.link}
          >
            {product.name}
          </RouterLink>
          {!product.newest && (
            <Typography sx={{ textDecoration: "line-through" }} color="#909497">
              Giá Cũ:{product.price.old} VND
            </Typography>
          )}
          {product.newest ? (
            <Typography color="#3498DB">
              Giá:{product.price.actual} VND
            </Typography>
          ) : (
            <Typography color="#3498DB">
              Giá Mới:{product.price.actual} VND
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

ProductItems.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItems;
