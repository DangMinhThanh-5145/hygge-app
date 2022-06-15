import React, { useEffect } from "react";
import "./NewestProduct.css";
import CommonTitle from "../Commons/CommonTile";
import CommonButton from "../Commons/CommonButton";
import ProductItems from "../ProductItems";
import { useDispatch, useSelector } from "react-redux";
import productSelector from "../../store/selectors/productsSelector";
import { productAsyncActions } from "../../store/slices/productSlice";

const NewestProducts = () => {
  const dispatch = useDispatch();
  const selectNewestProduct = useSelector(productSelector.selectProducts);

  useEffect(() => {
    dispatch(productAsyncActions.fetchNewestProducts());
  }, [dispatch]);

  return (
    <div className="newest-product-container">
      <CommonTitle title="- Our Products" subTitle="Explore our Products" />
      <div className="newest-product-container">
        {selectNewestProduct.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
      <div className="newest-product-button-style">
        <CommonButton
          name="View All Product"
          color="blueColor"
          variant="outlined"
          sx={{
            color: "#3498DB",
            borderRadius: "5px",
            fontSize: "15px",
            fontWeight: "bold",
            mt: 3,
            mb: 3,
          }}
        />
      </div>
    </div>
  );
};

export default NewestProducts;
