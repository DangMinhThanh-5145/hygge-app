/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/icons/whaleLogo.svg";
import authSelector from "../../store/selectors/authSelector";
import MenuIcon from "@mui/icons-material/Menu";
import useCart from "../../hooks/useCart";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ButtonNavigate,
  PopoverContainer,
} from "./Styles";
import { Badge, Drawer, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLogin = useSelector(authSelector.selectIsLogin);
  const accountSelector = useSelector(authSelector.selectAccount);
  const navigate = useNavigate();
  const { totalQuantity } = useCart();

  //drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ButtonNavigate />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <img src={Logo} height="40px" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Whale Organics
          </Typography>
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)} sx={{ mr: 26 }}>
                {anchor}
              </MenuIcon>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Search sx={{ mr: 3 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack direction="row" spacing={2}>
            <Badge
              badgeContent={totalQuantity}
              color="primary"
              sx={{ mr: 5, ml: 2, cursor: "pointer" }}
              showZero
              onClick={() => navigate("/product/check-out")}
            >
              <LocalMallIcon />
            </Badge>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Badge
              badgeContent={4}
              color="primary"
              showZero
              sx={{ mr: 5, cursor: "pointer" }}
            >
              <AccountCircleIcon />
            </Badge>
          </Stack>
          {!isLogin ? (
            <Typography sx={{ mr: 5 }}>Hello, Guest</Typography>
          ) : (
            <>
              <Typography sx={{ mr: 5 }}>
                Hello, {accountSelector.firstName} {accountSelector.lastName}
              </Typography>
              <PopoverContainer />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
