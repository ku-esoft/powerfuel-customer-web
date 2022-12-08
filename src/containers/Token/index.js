import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Button,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import QRToken from "../../components/common/token/QRToken/QRToken.component";
import { ArrowBack } from "@mui/icons-material";

const Token = () => {
  return (
    <>
      <Content>
        <Grid container spacing="2">
          <Grid item xs={12} md={6} className="mytoken">
            <BoxedContent
              title=""
              subtitle=""
              description=""
              backgroundColor="#21203f"
              moderate
            >
              <QRToken value="CBK2011---01/12/2022---0900TO1500---RATMALANA" />
            </BoxedContent>
          </Grid>

          <Grid item xs={12} md={6} className="token-info-wrap">
            <BoxedContent title="" subtitle="" description="" dense>
              <Alert severity="info" className="alert-info">
                Please produce this token to fuel station staff before pumping
                fuel
              </Alert>
            </BoxedContent>

            <Divider
              sx={{
                height: "2.4rem",
                border: "none",
                display: {
                  md: "none",
                },
              }}
            />

            <BoxedContent title="" subtitle="" description="" dense>
              <List dense={true} className="list-info">
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

            <BoxedContent dense>
              <Button
                fullWidth
                variant="outlined"
                color="default"
                component={RouterLink}
                to="/dashboard"
                startIcon={<ArrowBack />}
                sx={{ mt: 2 }}
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
