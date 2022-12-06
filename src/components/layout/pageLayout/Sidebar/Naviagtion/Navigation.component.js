import React, { useMemo, forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
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
        {/* {icon ? <SvgIcon>{icon}</SvgIcon> : null} */}
        <ListItemText primary={primary} className={styles.navlink} />
      </ListItem>
    </li>
  );
};

const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, color: "#fff" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={styles.navlist}
    >
      <ListItemLink to="/admin/dashboard" primary="Dashboard" />

      <ListItemLink to="/admin/quotations" primary="Quotations" />

      <ListItemLink to="/admin/sales-orders" primary="Sales Orders" />

      <ListItemLink to="/admin/production-orders" primary="Production Orders" />

      <ListItemLink to="" primary="Invoices" />

      <ListItemLink to="" primary="Payment Management" />

      <ListItemLink to="/admin/pricebook" primary="Pricebook" />

      <ListItemLink
        to="/admin/parameter-management"
        primary="Parameter Management"
      />

      <ListItemButton onClick={handleClick}>
        <ListItemText primary="User Management" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            mode="sub"
            to="/admin/user-management/users"
            primary="Users"
          />
          <ListItemLink
            mode="sub"
            to="/admin/user-management/roles"
            primary="Roles"
          />
        </List>
      </Collapse>

      {/* <ListItemLink to="/admin/user-management" primary="User Management" /> */}

      <ListItemLink
        to="/admin/organization-management"
        primary="Organization Management"
      />

      <Divider />

      <ListItemLink to="/store" primary="Customer Store" />

      {/* <ListItemButton>
        <ListItemText primary="Reports" />
      </ListItemButton> */}
      {/* <ListItemButton onClick={handleClick}>
        <ListItemText primary="Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Billing" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Shipping" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
};

export default Navigation;
