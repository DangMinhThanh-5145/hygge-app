import React, { useEffect } from "react";
import { productAsyncActions } from "../../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "./RelatedProduct.css";
import CommonTile from "../Commons/CommonTile";
import GroupButton from "../GroupButton";
import ProductItems from "../ProductItems";
import productSelector from "../../store/selectors/productsSelector";
import CommonButton from "../Commons/CommonButton";

const RelatedProduct = () => {
  const dispatch = useDispatch();
  const selectProducts = useSelector(productSelector.selectProducts);
  useEffect(() => {
    dispatch(productAsyncActions.fetchProducts(), [dispatch]);
  });

  return (
    <div className="related-product-container">
      <div className="header">
        <CommonTile title="- Explore More" subTitle=" Related Products" />
        <span className="group-button">
          <GroupButton />
        </span>
      </div>

      <div className="related-product-list ">
        {selectProducts.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
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
          ml: 85,
        }}
      />
    </div>
  );
};

export default RelatedProduct;
