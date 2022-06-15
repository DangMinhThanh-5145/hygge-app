import React, { useEffect } from "react";
import "./Product.css";
import Feature from "../../components/Feature";
import OurReview from "../../components/OurReview";
import RelatedProduct from "../../components/RelatedProduct";
import authSelector from "../../store/selectors/authSelector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
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
    <div className="product-page-container">
      <Feature />
      <OurReview />
      <RelatedProduct />
    </div>
  );
};

export default ProductPage;
