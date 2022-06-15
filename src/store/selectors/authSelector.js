import { createSelector } from "@reduxjs/toolkit";

const selectAuthBranch = (state) => state.auth;

const selectIsLoading = createSelector(
  selectAuthBranch,
  (auth) => auth.isLoading
);

const selectIsLogin = createSelector(selectAuthBranch, (auth) => auth.isLogin);

const selectAccount = createSelector(selectAuthBranch, (auth) => auth.account);

const authSelector = {
  selectIsLoading,
  selectIsLogin,
  selectAccount,
};

export default authSelector;
