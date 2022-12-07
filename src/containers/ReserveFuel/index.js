import React, { useState, useEffect } from "react";
import {
  Link as RouterLink,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Stack,
  InputBase,
  Button,
  SvgIcon,
  Alert,
} from "@mui/material";
import Intro from "../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import ReservationForm from "../../components/pages/reserveFuel/ReservationFrom/ReservationForm.component";

const ReserveFuel = () => {
  return (
    <>
      <Intro
        pageTitle=""
        description="Select fuel station, date and time you are planning to reserve."
      />

      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BoxedContent title="" subtitle="" description="" dense={true}>
              <Alert severity="info" className="alert-info">
                Please make sure to check delivery schedule before making a fuel
                request
              </Alert>
            </BoxedContent>
          </Grid>

          <Grid item xs={12}>
            <BoxedContent dense={true}>
              <ReservationForm />
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default ReserveFuel;
