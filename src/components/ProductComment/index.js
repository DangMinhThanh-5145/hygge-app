import { Box } from "@mui/material";
import CommentItems from "../CommentItems";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reviewSelector from "../../store/selectors/reviewSelector";
import { reviewAsyncActions } from "../../store/slices/reviewSlice";

const ProductComment = () => {
  const dispatch = useDispatch();
  const selectReview = useSelector(reviewSelector.selectProducts);

  useEffect(() => {
    dispatch(reviewAsyncActions.fetchReviews());
  }, [dispatch]);

  return (
    <Box>
      {selectReview.map((review) => (
        <CommentItems key={review.id} review={review} />
      ))}
    </Box>
  );
};

export default ProductComment;
