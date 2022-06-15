import "./ShoppingCart.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSelector from "../../store/selectors/authSelector";
import AddToCart from "../../components/AddToCart";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const isLogin = useSelector(authSelector.selectIsLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  return !isLogin ? (
    navigate("/login")
  ) : (
    <div className="shopping-cart-page-container">
      <AddToCart />
    </div>
  );
};

export default ShoppingCart;
