import CommonButton from "..QuantityButton/Commons/CommonButton";
import CommonTile from "../Commons/CommonTile";
import React from "react";
import { Outlet } from "react-router-dom";
import "./ShoppingCartContent.css";

const ShoppingCartContent = () => {
  return (
    <div>
      <div className="shopping-cart-container">
        <div className="cart-header">
          <CommonTile title="- Your Cart" subTitle="Shopping Cart" />
          <div style={{ marginTop: "120px", marginLeft: "850px" }}>
            <CommonButton
              color="blueColor"
              name="Clear All"
              variant="outlined"
              sx={{ width: "160px", height: "44px", borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>

      <div className="product">
        <div>
          <div className="product-item">
            <Outlet />
          </div>
          <div className="product-item">
            <Outlet />
          </div>
          <div></div>
        </div>
        <div className="cart-total">
          <h1>Cart Total</h1>
          <p>Subtotal: 150$</p>
          <p>Tax: 15$</p>
          <p>Shipping: 15$</p>
          <h4>Total: 224$</h4>
          <CommonButton
            name="Checkout"
            variant="outlined"
            color="greenColor"
            sx={{
              height: "44px",
              width: "164px",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartContent;
