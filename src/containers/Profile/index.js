import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import { Grid, Typography, Box, Stack, InputBase, Button } from "@mui/material";

import Intro from "../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";

const Profile = () => {
  return (
    <>
      <Intro
        pageTitle=""
        description="View yor information and update login & contact details"
      />

      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="" subtitle="" description="">
              content
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Profile;
