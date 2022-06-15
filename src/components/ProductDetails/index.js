/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from "@mui/material";
import CommonButton from "../../components/Commons/CommonButton";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productServices from "../../services/productServices";
import "./Product.css";
import ProductComment from "../../components/ProductComment";
import { getColorByCategory } from "../..//utils";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkStyle: {
    textDecoration: "none",
    color: "#3498DB",
  },
});

const ProductDetails = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    (async () => {
      const { product } = await productServices.readProductById(id);
      setProduct(product);
      console.log(product);
    })();
  }, [id]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F6F7FB",
          display: "flex",
          mr: 10,
          ml: 10,
          mt: 15,
          borderRadius: 1,
          padding: 2,
        }}
      >
        <Box>
          <img
            src={product.img}
            style={{ height: "540px", width: "700px", borderRadius: 5 }}
          />
        </Box>
        <Box>
          <Box sx={{ mt: 2, ml: 50 }}>
            <CommonButton
              name={
                <Link
                  to={`${product.id}/../shopping-cart`}
                  className={classes.linkStyle}
                >
                  Thêm vào giỏ hàng
                </Link>
              }
              variant="outlined"
              sx={{
                height: 40,
                width: 200,
                color: "#1E8449",
              }}
              color="blueColor"
            />
          </Box>
          <Box sx={{ mt: 10, ml: 5, mr: 5 }}>
            <Typography variant="h3">{product.name}</Typography>
            <CommonButton
              name={product.category}
              color={getColorByCategory(product?.category)}
              variant="outlined"
              sx={{
                width: "120px",
                borderRadius: "20px",
                fontSize: "10px",
                fontWeight: "bold",
                mt: 3,
                mb: 3,
              }}
            />
            <Box sx={{ display: "flex" }}>
              {!product.newest && (
                <Typography
                  variant="h6"
                  sx={{ textDecoration: "line-through", mr: 5 }}
                >
                  {product?.price?.old} VND
                </Typography>
              )}
              {product.newest ? (
                <Typography variant="h6">
                  {product?.price?.actual} VND
                </Typography>
              ) : (
                <Typography variant="h6">
                  {product?.price?.actual} VND
                </Typography>
              )}
            </Box>
            <Typography sx={{ mt: 3, mb: 3 }}>{product?.desc}</Typography>
          </Box>
        </Box>
      </Box>
      <ProductComment />
    </>
  );
};

export default ProductDetails;
