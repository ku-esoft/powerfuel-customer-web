import React from "react";
import { Box } from "@mui/material";

const Content = (props) => {
  return (
    <Box
      component="article"
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
