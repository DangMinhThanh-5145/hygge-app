import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { persistStore } from "redux-persist";
import { authReducer } from "../store/slices/authSlice";
import { reviewReducer } from "./slices/reviewSlice";
import { cartReducer } from "./slices/cartSlice";

const reducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  review: reviewReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
