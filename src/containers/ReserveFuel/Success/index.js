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
import QRCode from "react-qr-code";
import Intro from "../../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import { ArrowBack } from "@mui/icons-material";

const ReserveFuelSuccess = () => {
  return (
    <>
      <Intro pageTitle="" pageTitleShort="" />

      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="Success" subtitle="" description="">
              <Typography>
                You’ve successfully reserved 20 LITRES from the RATMALANA fuel
                station. Please produce this token when you are recieving fuel
              </Typography>
            </BoxedContent>

            <BoxedContent title="" subtitle="" description="">
              <Alert severity="info">
                This token is only valid on 01/12/2022 from 8.30 AM to 12.30 PM
              </Alert>
            </BoxedContent>

            <BoxedContent title="" subtitle="" description="">
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 256,
                  width: "100%",
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={"powerfuel"}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </BoxedContent>

            <BoxedContent>
              <Button
                fullWidth
                variant="outlined"
                component={RouterLink}
                to="/reserve"
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
