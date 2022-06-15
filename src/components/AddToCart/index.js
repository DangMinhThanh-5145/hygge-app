import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import useCart from "../../hooks/useCart";
import CommonButton from "../Commons/CommonButton";
import QuantityButton from "../Commons/QuantityButton";
import productServices from "../../services/productServices";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getColorByCategory } from "../../utils";

const AddToCart = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleAddToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const { product } = await productServices.readProductById(id);
      setProduct(product);
    })();
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 4,
      }}
    >
      <Box
        sx={{
          width: 600,
          ml: 10,
        }}
      >
        <Card sx={{ mb: 3 }}>
          <CardMedia
            sx={{ height: 400 }}
            component="img"
            height="140"
            image={product?.img}
            alt="product images"
          />
          <CardContent>
            <CommonButton
              name={product?.category}
              color={getColorByCategory(product?.category)}
              variant="outlined"
              sx={{
                width: "120px",
                borderRadius: "20px",
                fontSize: "10px",
                fontWeight: "bold",
                mt: 2,
                mb: 2,
              }}
            />
            <Typography gutterBottom variant="h5" component="div">
              {product?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product?.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <QuantityButton counter={quantity} setCounter={setQuantity} />
        <CommonButton
          name="Thêm vào giỏ hàng"
          color="blueColor"
          variant="outlined"
          sx={{
            borderRadius: "5px",
            fontSize: "15px",
            fontWeight: "bold",
            mt: 3,
            mb: 3,
          }}
          onClick={() => handleAddToCart(product, quantity)}
        />
      </Box>

      <Box sx={{ width: 800, ml: 10 }}>
        <Typography variant="h4" sx={{ p: 1 }}>
          Tên: {product?.name}
        </Typography>
        <Typography variant="h5" sx={{ p: 1 }}>
          Giá: {product?.price?.actual}
        </Typography>
        <Typography variant="h5" sx={{ p: 1 }}>
          Số lượng: {quantity}
        </Typography>
        <Typography variant="h5" sx={{ p: 1 }}>
          Tổng cộng: {quantity * Number(product?.price?.actual)}
          VNĐ
        </Typography>

        <Divider sx={{ mt: 3, mb: 3 }} />
        <CommonButton
          variant="outlined"
          color="blueColor"
          sx={{ height: 40 }}
          name="Thanh Toán"
          onClick={() => navigate("../check-out")}
        />
      </Box>
    </Box>
  );
};

export default AddToCart;
