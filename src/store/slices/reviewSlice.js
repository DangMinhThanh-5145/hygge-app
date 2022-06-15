import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewServices from "../../services/reviewServices";

const initialState = {
  reviews: [],
};

const fetchReviews = createAsyncThunk("review/readReviews", () =>
  reviewServices.readReviews()
);

const slice = createSlice({
  name: "review",
  initialState,
  extraReducers: {
    [fetchReviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload.reviews;
    },
  },
});

export const reviewActions = slice.actions;
export const reviewAsyncActions = {
  fetchReviews,
};

export const reviewReducer = slice.reducer;
