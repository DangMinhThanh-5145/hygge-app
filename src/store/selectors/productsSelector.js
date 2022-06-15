import { createSelector } from "@reduxjs/toolkit";

const selectProduct = (state) => state.product;
const selectProducts = createSelector(
  selectProduct,
  (product) => product.products
);
const selectFilter = createSelector(selectProduct, (product) => product.filter);

const productSelector = {
  selectProducts,
  selectFilter,
};

export default productSelector;
