import CheckOutContainer from "../../components/CheckOutContainer";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSelector from "../../store/selectors/authSelector";
import "./CheckOutPage.css";

const CheckOutPage = () => {
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
    <div className="check-out-page-container">
      <CheckOutContainer />
    </div>
  );
};

export default CheckOutPage;
