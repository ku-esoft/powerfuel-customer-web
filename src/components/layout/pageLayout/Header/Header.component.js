import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../actions";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import SearchIcon from "@mui/icons-material/Search";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <StyledBadge
          overlap="circular"
          color="secondary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{ position: "relative", top: "-2px", paddingLeft: "5px" }}
        >
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="User prfile pic"
              src="https://i.ibb.co/8M2wKj3/random-user-31.jpg"
            />
          </IconButton>
        </StyledBadge>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCloseUserMenu();
            // dispatch(userActions.logout());
            navigate("/auth/login");
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

const Header = (props) => {
  const { open, toggleDrawer, theme, drawerWidth } = props;
  const location = useLocation();
  let pageTitle = "";

  switch (location?.pathname) {
    case "/dashboard":
      pageTitle = "Dashboard";
      break;

    case "/reserve":
      pageTitle = "Reserve Fuel";
      break;

    case "/reserve/success":
      pageTitle = "Reserve Fuel";
      break;

    case "/token":
      pageTitle = "My Token";
      break;

    default:
      pageTitle = location?.pathname.replace("/", "");
      break;
  }

  const drawerOpen = {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.05),0px 2px 2px 0px rgba(0,0,0,0.025),0px 1px 5px 0px rgba(0,0,0,0.05)",
  };

  const drawerClose = {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.05),0px 2px 2px 0px rgba(0,0,0,0.025),0px 1px 5px 0px rgba(0,0,0,0.05)",
  };

  return (
    <AppBar
      position="absolute"
      open={open}
      elevation={2}
      sx={open ? drawerOpen : drawerClose}
    >
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
          pt: 3.5,
          pb: 3.25,
        }}
        elevation={0}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            mr: 1,
            position: "relative",
            l: "2px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuTwoToneIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {pageTitle}
        </Typography>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
        >
          <Settings />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    // "&::after": {
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   borderRadius: "50%",
    //   animation: "ripple 1.2s infinite ease-in-out",
    //   border: "1px solid currentColor",
    //   content: '""',
    // },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
