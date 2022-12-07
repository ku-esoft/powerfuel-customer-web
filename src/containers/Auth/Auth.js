import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import logo from "./../../assets/images/logos/logo_black.svg";
import cardImage from "./../../assets/images/backgrounds/bg_auth_card_img.jpg";
import styles from "./auth.module.scss";

const Copyright = (props) => {
  return (
    <Typography
      variant="caption"
      color="text.caption"
      align="center"
      display="block"
      marginTop="2.4rem"
      {...props}
      className={styles.copyright}
    >
      {`Copyright ©${new Date().getFullYear()} PowerFuel. V:${
        process.env.REACT_APP_VERSION
      }`}
    </Typography>
  );
};

const Auth = () => {
  return (
    <Container maxWidth={false} className={styles.wrapper}>
      <Container maxWidth={"sm"} className={styles.contentWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.authContentWrapper}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Grid container>
                <Grid item md={5} sx={{ display: { xs: "none", md: "block" } }}>
                  <img src={cardImage} alt="" className={styles.cardImage} />
                </Grid>
                <Grid item md={7} className={styles.outletWrapper}>
                  <Outlet />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        {/* <Copyright /> */}
      </Container>
    </Container>
  );
};

export default Auth;
