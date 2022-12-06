import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../actions";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        ></Typography>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
        >
          <IconButton color="inherit">
            <Badge badgeContent={23} color="secondary">
              <NotificationsNoneTwoToneIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <EmailTwoToneIcon />
            </Badge>
          </IconButton>

          <Settings />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.3s ease-in-out",
  color: "#232323",
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  "&:focus": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    fontSize: "0.85rem",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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
