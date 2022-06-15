import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../../services/authServices";
import LocalStorage from "../../constants/LocalStorage";
import localStoragePlus from "../../utils/localStoragePlus";

const initialState = {
  account: {},
  isLogin: false,
  isLoading: false,
};

const login = createAsyncThunk(
  "auth/login",
  async ({ data }, { rejectWithValue }) => {
    try {
      return await authServices.login(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await authServices.logout();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      const { token, refreshToken, user: account } = payload;
      const authStorage = localStoragePlus.createStorage(LocalStorage.Auth.key);

      authStorage.setItem(LocalStorage.Auth.token, token);
      authStorage.setItem(LocalStorage.Auth.refreshToken, refreshToken);

      state.account = account;
      state.isLogin = true;
      state.isLoading = false;
    },

    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.rejected]: (state) => {
      state.isLoading = false;
    },
    [logout.fulfilled]: (state) => {
      const authStorage = localStoragePlus.createStorage(LocalStorage.Auth.key);

      authStorage.removeItem(LocalStorage.Auth.token);
      authStorage.removeItem(LocalStorage.Auth.refreshToken);

      state.account = {};
      state.isLogin = false;
      state.isLoading = false;
    },
  },
});

const persistConfig = {
  keyPrefix: "c2shop",
  key: "Auth",
  storage,
};

export const authActions = slice.actions;
export const authAsyncActions = { login, logout };
export const authReducer = persistReducer(persistConfig, slice.reducer);
