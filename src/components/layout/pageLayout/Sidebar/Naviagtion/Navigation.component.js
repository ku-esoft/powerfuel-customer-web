import React, { useMemo, forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import styles from "./Navigation.module.scss";

const ListItemLink = (props) => {
  const { primary, to, mode } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li style={{ paddingLeft: mode === "sub" ? "1rem" : 0 }}>
      <ListItem button component={renderLink}>
        <ListItemText primary={primary} className={styles.navlink} />
      </ListItem>
    </li>
  );
};

const Navigation = () => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, color: "#fff" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={styles.navlist}
    >
      <ListItemLink to="/token" primary="My Token" />

      <Divider sx={{ my: 2 }} />

      <ListItemLink to="/dashboard" primary="Dashboard" />

      <ListItemLink to="/schedule" primary="Delivery Schedule" />

      <ListItemLink to="/reserve" primary="Reserve Fuel" />

      <ListItemLink to="/history" primary="Reservation History" />

      <Divider sx={{ my: 2 }} />

      <ListItemLink to="/profile" primary="My Profile" />
    </List>
  );
};

export default Navigation;
