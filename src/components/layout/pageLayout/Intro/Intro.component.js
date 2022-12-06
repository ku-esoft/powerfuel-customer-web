import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import styles from "./Intro..module.scss";

const Intro = (props) => {
  const { pageTitle, pageTitleShort, breadcrumbs, additionalWidgets } = props;

  return (
    <Box
      component="section"
      sx={{
        mb: {
          xs: 3,
          md: 5,
        },
      }}
    >
      <Grid container>
        <Grid item>
          {pageTitle && (
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  md: "1.4rem",
                  lg: "1.6rem",
                },
                fontWeight: 400,
              }}
            >
              {pageTitle}
            </Typography>
          )}

          {breadcrumbs && (
            <Breadcrumbs
              separator={<NavigateNextTwoToneIcon fontSize="small" />}
              aria-label="breadcrumb"
              className={styles.breadcrumbs}
            >
              {breadcrumbs}
            </Breadcrumbs>
          )}
        </Grid>

        <Grid sx={{ flex: 1 }}>{additionalWidgets}</Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
