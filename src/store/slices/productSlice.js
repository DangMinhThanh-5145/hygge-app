import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "../../services/productAPI";

const initialState = {
  products: [],
  filter: {
    categories: [],
    sortByPrice: "asc",
  },
};

const fetchProducts = createAsyncThunk(
  "product/readProduct",
  async (_, { rejectWithValue, getState }) => {
    try {
      return await productAPI.readProduct(getState().product.filter);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const fetchNewestProducts = createAsyncThunk("product/readNewestProduct", () =>
  productAPI.readNewestProduct()
);

const slice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
    },
    [fetchNewestProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
    },
  },
});

export const productActions = slice.actions;
export const productAsyncActions = {
  fetchProducts,
  fetchNewestProducts,
};

export const productReducer = slice.reducer;
