/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CommonButton from "../Commons/CommonButton";
import { Box, Checkbox, TextField, Typography } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAsyncActions } from "../../store/slices/authSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useNotify from "../../hooks/useNotify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useNotify();

  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter email in correct format")
      .required("Email cannot be blank"),
    password: yup
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(32, "Password can only contain up to 32 characters")
      .required("Password cannot be left blank"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const handleOnSubmit = async (data) => {
    console.log(data);
    try {
      const actionResult = await dispatch(
        authAsyncActions.login({
          data,
        })
      );
      const { message } = await unwrapResult(actionResult);
      success(message);
      navigate("../home-page");
    } catch ({ message }) {
      error(message);
    }
  };
  return (
    <>
      <Box sx={{ mt: 5, ml: 9, mr: 12 }}>
        <form
          className="login-form-container"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <Typography
            sx={{
              fontSize: 35,
              fontWeight: "bold",
              background: "-webkit-linear-gradient(#AED6F1, #21618C, #8b2bb4)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 10,
            }}
          >
            Login To Whale
          </Typography>
          <Typography>Email Address</Typography>
          <TextField
            {...register("email")}
            fullWidth
            label="Email Address"
            margin="normal"
            error={!!errors.email}
            helperText={errors?.email?.message}
            sx={{ mb: 5 }}
          />
          <Typography>Password</Typography>
          <TextField
            {...register("password")}
            fullWidth
            label="Password"
            margin="normal"
            type="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            sx={{ mb: 2 }}
          />
          <span style={{ display: "flex" }}>
            <Checkbox defaultChecked color="blueColor" />
            <h3>Remember Me</h3>
          </span>
          <CommonButton
            name="Login"
            color="blueColor"
            variant="outlined"
            type="submit"
            sx={{
              height: "50px",
              width: "496px",
              fontSize: "15px",
              color: "#3498DB",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          <Box sx={{ display: "flex", mt: 3 }}>
            <CommonButton
              name="Create Account"
              color="blueColor"
              type="submit"
              sx={{
                height: "35px",
                width: "150px",
                padding: "10px",
                mr: 2,
                ml: 9,
              }}
            />
            <CommonButton
              name="Forgot Password?"
              color="blueColor"
              type="submit"
              sx={{
                height: "35px",
                width: "190px",
                padding: "10px",
                borderRadius: "5px",
              }}
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
