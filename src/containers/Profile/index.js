import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import { Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

import Intro from "../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import ProfileForm from "../../components/pages/profile/ProfileForm/ProfileForm.component";

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
            <BoxedContent title="" subtitle="" description="" dense>
              <List dense={true} className="list-info">
                <ListItem>
                  <ListItemText primary="Name" secondary="John Done" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Mobile Number"
                    secondary="0773232434"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary="johndoe@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Plate Number"
                    secondary="WP CBK 2011"
                  />
                </ListItem>
              </List>
            </BoxedContent>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Divider sx={{ height: "2.4rem", border: "none" }} />

            <BoxedContent title="" subtitle="" description="" dense>
              <ProfileForm />
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Profile;
