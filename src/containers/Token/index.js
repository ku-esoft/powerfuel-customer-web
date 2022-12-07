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
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import QRCode from "react-qr-code";
import Intro from "../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import { ArrowBack } from "@mui/icons-material";

const Token = () => {
  return (
    <>
      <Intro pageTitle="" pageTitleShort="" />

      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
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

            <BoxedContent title="" subtitle="" description="">
              <Alert severity="info">
                Please produce this token to fuel station staff before pumping
                fuel
              </Alert>
            </BoxedContent>

            <BoxedContent title="" subtitle="" description="">
              <List dense={true}>
                <ListItem>
                  <ListItemText primary="Fuel Station" secondary="Ratmalana" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Date" secondary="01/12/02" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Valid From" secondary="12.00 PM" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Valid To" secondary="3.00 PM" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Quota" secondary="20 Litres" />
                </ListItem>
              </List>
            </BoxedContent>

            <BoxedContent>
              <Button
                fullWidth
                variant="outlined"
                component={RouterLink}
                to="/dashboard"
                startIcon={<ArrowBack />}
              >
                Back
              </Button>
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Token;
