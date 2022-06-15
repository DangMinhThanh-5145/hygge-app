import Filter from "../Filter";
import ProductItems from "../ProductItems";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productSelector from "../../store/selectors/productsSelector";
import { productAsyncActions } from "../../store/slices/productSlice";

const FilterProduct = () => {
  const dispatch = useDispatch();
  const selectProduct = useSelector(productSelector.selectProducts);
  useEffect(() => {
    dispatch(productAsyncActions.fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <Filter />
      <div className="cate-product-container">
        {selectProduct.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
