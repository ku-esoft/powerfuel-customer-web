import React from "react";
import { Paper, Grid, Typography } from "@mui/material";

const BoxedContent = (props) => {
  const {
    title,
    subtitle,
    description,
    dense,
    moderate,
    backgroundColor,
    children,
  } = props;

  return (
    <Paper
      elevation={dense ? 0 : 2}
      sx={{
        width: "100%",
        p: {
          xs: dense ? 0 : moderate ? 4 : 2,
          md: dense ? 0 : 4,
        },
        backgroundColor: backgroundColor ? backgroundColor : "",
      }}
    >
      <Grid container maxWidth={"xl"} spacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            mb: {
              ...(title === "" && subtitle === "" && description === ""
                ? { xs: 0 }
                : { xs: 2 }),
              ...(title === "" && subtitle === "" && description === ""
                ? { md: 0 }
                : { md: 2 }),
            },
            mt: {
              xs: 0,
              md: -1,
            },
          }}
        >
          {title && (
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  md: "1.2rem",
                },
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography paragraph sx={{ mt: 2 }}>
              {description}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BoxedContent;
