import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Category.css";
import { Outlet, useNavigate } from "react-router-dom";
import authSelector from "../../store/selectors/authSelector";

const CategoryPage = () => {
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
    <div className="category-page-container">
      <Outlet />
    </div>
  );
};

export default CategoryPage;
