import LoginContainer from "../../components/LoginContainer";
import React from "react";
import { SnackbarProvider } from "notistack";

const SignInPage = () => {
  return (
    <SnackbarProvider>
      <LoginContainer />
    </SnackbarProvider>
  );
};

export default SignInPage;
