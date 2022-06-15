import React, { useEffect } from "react";
import "./HomePage.css";
import Category from "../../components/Category";
import Navigation from "../../components/Navigation";
import OurReview from "../../components/OurReview";
import WhyUs from "../../components/WhyUs";
import Blog from "../../components/Blog";
import NewestProducts from "../../components/NewestProduct";
import { useSelector } from "react-redux";
import authSelector from "../../store/selectors/authSelector";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
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
    <div className="home-page-container">
      <Navigation />
      <Category />
      <NewestProducts />
      <WhyUs />
      <OurReview />
      <Blog />
    </div>
  );
};

export default HomePage;
