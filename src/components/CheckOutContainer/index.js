import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import CommonTile from "../Commons/CommonTile";
import useCart from "../../hooks/useCart";
import React from "react";
import "./CheckOutContainer.css";

const CheckOutContainer = () => {
  const { products, totalQuantity, totalPrice } = useCart();
  return (
    <div>
      <CommonTile title="- Almost There" subTitle="Checkout" />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10, mb: 30 }}>
        <Box>
          <Typography sx={{ mb: 4 }} variant="h3">
            Thanh toán đơn hàng
          </Typography>

          <Divider />

          {totalQuantity ? (
            <List sx={{ width: "100%" }}>
              {products.map(({ product, quantity }, index) => (
                <>
                  <ListItem
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={index}
                    alignItems="flex-start"
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={product.img} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ mr: 4 }}
                      primary={product.name}
                      secondary={`${product.desc.slice(0, 60)}...`}
                    />
                    <ListItemText
                      sx={{ textAlign: "right" }}
                      primary={`${product.price.actual} x ${quantity}`}
                      secondary={
                        <Typography
                          sx={{
                            borderTop: "1px solid #ccc",
                          }}
                        >{`${product.price.actual * quantity}`}</Typography>
                      }
                    />
                  </ListItem>
                  <Divider />
                </>
              ))}

              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alignItems="flex-start"
              >
                <ListItemAvatar />
                <ListItemText
                  primary={<Typography variant="h3">Tổng tiền</Typography>}
                />
                <ListItemText
                  sx={{ textAlign: "right" }}
                  primary={totalPrice}
                />
              </ListItem>
            </List>
          ) : (
            <Typography sx={{ mt: 5 }}>
              Bạn chưa có sản phẩm nào, vui lòng...
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default CheckOutContainer;
