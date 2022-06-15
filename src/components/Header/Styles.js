import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { List, Paper, Popover, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommonButton from "../../components/Commons/CommonButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { authAsyncActions } from "../../store/slices/authSlice";

export const useStyles = makeStyles({
  box: {
    textDecoration: "none",
    fontFamily: "Arial",
  },
  img: {
    height: 250,
    width: 340,
    borderRadius: 5,
  },
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ButtonNavigate = () => {
  const navigate = useNavigate();
  return (
    <>
      <List>
        <CommonButton
          name="Home Page"
          sx={{
            color: "#5DADE2",
            width: "120px",
            borderRadius: "5px",
            fontSize: "10px",
            fontWeight: "bold",
            mt: 3,
            mb: 3,
            ml: 2,
            mr: 2,
          }}
          onClick={() => navigate("../home-page")}
        />
        <CommonButton
          name="Product"
          sx={{
            color: "#5DADE2",
            width: "120px",
            borderRadius: "5px",
            fontSize: "10px",
            fontWeight: "bold",
            mt: 3,
            mb: 3,
            ml: 2,
            mr: 2,
          }}
          onClick={() => navigate("../product")}
        />
        <CommonButton
          name="Category"
          sx={{
            color: "#5DADE2",
            width: "120px",
            borderRadius: "5px",
            fontSize: "10px",
            fontWeight: "bold",
            mt: 3,
            mb: 3,
            ml: 2,
            mr: 2,
          }}
          onClick={() => navigate("../category")}
        />
      </List>
    </>
  );
};

export const PopoverContainer = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(authAsyncActions.logout());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <ArrowDropDownIcon sx={{ ml: -4 }} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1 }}>Profile</Typography>
        <Typography sx={{ p: 1 }}>Setting</Typography>
        <Typography sx={{ p: 1 }}>Options</Typography>
        <CommonButton
          name="Logout"
          sx={{
            color: "#5DADE2",
            width: "120px",
            borderRadius: "5px",
            fontSize: "10px",
            fontWeight: "bold",
            mt: 3,
            mb: 3,
            ml: 2,
            mr: 2,
          }}
          onClick={handleLogout}
        />
      </Popover>
    </>
  );
};
