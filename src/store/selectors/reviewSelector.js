import { createSelector } from "@reduxjs/toolkit";

const selectReview = (state) => state.review;

const selectProducts = createSelector(selectReview, (review) => review.reviews);

const reviewSelector = {
  selectProducts,
};
export default reviewSelector;
