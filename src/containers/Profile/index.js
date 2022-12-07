import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import { Grid, Typography, Box, Stack, InputBase, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Intro from "../../components/layout/pageLayout/Intro/Intro.component";
// import Content from "../../../components/layout/pageLayout/Content/Content.component";
// import BoxedContent from "../../../components/layout/pageLayout/BoxedContent/BoxedContent.component";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// import OrganizationTable from "../../../components/admin/OrganizationManagement/OrganizationTable/OrganizationTable.component";

const Profile = () => {
  const { parameter } = useParams();

  const breadcrumbs = [
    <Typography key="2">Organization Management</Typography>,
  ];

  return (
    <>
      <Intro
        pageTitle="Organization Management"
        pageTitleShort="Organization Management"
      />

      {/* <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="All Organizations" subtitle="" description="">
              <OrganizationTable />
            </BoxedContent>
          </Grid>
        </Grid>
      </Content> */}
    </>
  );
};

export default Profile;

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
  marginRight: theme.spacing(1),
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
    height: "1.85rem",
    [theme.breakpoints.up("md")]: {
      minWidth: "10rem",
    },
  },
}));
