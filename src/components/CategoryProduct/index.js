import CommonButton from "../Commons/CommonButton";
import CommonTile from "../Commons/CommonTile";
import Filter from "../Filter";
import ProductItems from "../ProductItems";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productSelector from "../../store/selectors/productsSelector";
import { productAsyncActions } from "../../store/slices/productSlice";
import "./CategoryProduct.css";

const CategoryProduct = () => {
  const dispatch = useDispatch();
  const filter = useSelector(productSelector.selectFilter);
  const selectProduct = useSelector(productSelector.selectProducts);
  useEffect(() => {
    dispatch(productAsyncActions.fetchProducts());
  }, [dispatch, filter]);
  return (
    <div className="cate-product-container">
      <CommonTile
        title="- Eye Care Products"
        subTitle="Explore the Eye Care Products"
      />
      <div>
        <Filter />
        <div className="cate-product-container">
          {selectProduct.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="cate-product-button-style">
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

export default CategoryProduct;
