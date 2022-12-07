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
  Divider,
} from "@mui/material";

import Intro from "../../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import QRToken from "../../../components/common/token/QRToken/QRToken.component";
import { ArrowBack } from "@mui/icons-material";

const ReserveFuelSuccess = () => {
  return (
    <>
      <Intro pageTitle="Success!" pageTitleShort="" />

      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="" subtitle="" description="" dense={true}>
              <Typography>
                You’ve successfully reserved{" "}
                <strong style={{ color: "#d32f2f" }}>20 LITRES</strong> from the{" "}
                <strong style={{ color: "#d32f2f" }}>RATMALANA</strong> fuel
                station. Please produce this token when you are recieving fuel
              </Typography>
            </BoxedContent>

            <Divider sx={{ height: "2.4rem" }} />

            <BoxedContent title="" subtitle="" description="" dense>
              <Alert severity="info" className="alert-info">
                This token is only valid on 01/12/2022 from 8.30 AM to 12.30 PM
              </Alert>
            </BoxedContent>

            <Divider sx={{ height: "2.4rem" }} />

            <BoxedContent
              title=""
              subtitle=""
              description=""
              backgroundColor="#21203f"
              moderate
            >
              <QRToken value="CBK2011---01/12/2022---0900TO1500---RATMALANA" />
            </BoxedContent>

            <Divider sx={{ height: "1.2rem", borderWidth: 0 }} />

            <BoxedContent dense>
              <Button
                fullWidth
                variant="outlined"
                color="default"
                component={RouterLink}
                to="/dashboard"
                startIcon={<ArrowBack />}
              >
                View Schedule
              </Button>
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default ReserveFuelSuccess;
