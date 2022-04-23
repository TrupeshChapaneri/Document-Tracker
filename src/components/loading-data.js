// import {  } from "@material-ui/core";
import { CircularProgress, Box } from "@mui/material";
import React from "react";

function LoadingData() {
  return (
    <Box className="loading-svg">
      <CircularProgress />
    </Box>
  );
}

export { LoadingData };
